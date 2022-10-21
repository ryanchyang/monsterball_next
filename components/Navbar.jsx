import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSwitchNetwork,
} from 'wagmi';
import useSWR from 'swr';
import { verifyMessage } from 'ethers/lib/utils';
// import { SiweMessage } from 'siwe';
import { useSession, signIn, signOut } from 'next-auth/react';
import { shortenAddress } from '../utils/helpers/shortenAddress';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPlusLg, BsLink45Deg } from 'react-icons/bs';
import { FiAlertTriangle } from 'react-icons/fi';
import NavbarItems from './NavbarItems';
import SideNavbar from './SideNavbar';
import MyModal from './Modal/MyModal';
import ConnectModal from './Modal/ConnectModal';
import SwitchAlertModal from './Modal/SwitchAlertModal';
import Spinner from './Spinner';
import navbarImage from '@/images/header/menu_bg.png';
import navbarImageDapp from '@/images/header/DApp_header.png';
import navbarLogoMb from '@/images/logo_mb.png';
import navbarLogoPc from '@/images/logo_pc.png';
import navbarWallet from '@/images/header/btn_money.png';
import mfbImg from '@/images/coin_mfb.png';
import { AnimatePresence } from 'framer-motion';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';
import { getNonce } from 'utils/api/web3';
import { getIfBindWallet, verifyBindWallet } from 'utils/api/auth';
import apiCodeConfig from 'apiCodeConfig';

const binanceChainId = 97;

const Navbar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const [connectModalShow, setConnectModalShow] = useState(false);
  const [switchAlertModalShow, setSwitchAlertModalShow] = useState(false);
  const [bindWalletModalShow, setBindWalletModalShow] = useState(false);
  const [pageType, setPageType] = useState();
  // const [_isConnected, _setIsConnected] = useState(false);
  const [bindWalletLoading, setBindWalletLoading] = useState(false);

  const currentWidth = useCurrentWidth();
  const router = useRouter();

  /* auth start */
  const { data: session, status: sessionStatus } = useSession();
  /* auth end */

  /* web3 start */
  const {
    connect,
    connectors,
    isLoading: connectIsLoading,
    error,
  } = useConnect({
    onSuccess(data) {
      // setConnectModalShow(false);
    },
    chainId: binanceChainId,
  });

  const { disconnect } = useDisconnect({
    onSuccess(data) {
      setConnectModalShow(false);
      setSwitchAlertModalShow(false);
    },
  });

  const { address, connector: activeConnector, isConnected } = useAccount();

  const { chain } = useNetwork();

  const { data, isLoading, signMessage } = useSignMessage({
    async onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const bindAddress = verifyMessage(variables.message, data);
      if (bindAddress) {
        const verifyResult = await verifyBindWallet(
          session.token,
          bindAddress,
          data
        );

        if (verifyResult.code !== apiCodeConfig['success']) return;
        bindWalletMutate();
        setBindWalletLoading(false);
        localStorage.setItem('bind_address', bindAddress);
        setConnectModalShow(false);
      }
    },
  });
  // const { signMessageAsync } = useSignMessage();

  const {
    switchNetwork,
    isLoading: switchIsLoading,
    error: switchError,
  } = useSwitchNetwork({
    onSuccess(data) {
      setSwitchAlertModalShow(false);
    },
    throwForSwitchChainNotSupported: true,
  });
  /* web3 end */

  /* client fetching start */

  const { data: bindWalletStatus, mutate: bindWalletMutate } = useSWR(
    !address || !session ? null : '/api/user/checkWalletExist',
    () => getIfBindWallet(session.token, address)
  );

  /* client fetching end */

  const metamaskConnector = connectors[0]; // 連接Metamask
  const walletconnectConnector = connectors[1]; // 連接Walletconnect

  /* handler start */
  const bindWalletHandler = async () => {
    const chainId = chain?.id;
    if (!address || !chainId) return;
    setBindWalletLoading(true);

    const nonceResult = await getNonce(session.token, address);
    if (nonceResult.code !== apiCodeConfig['success']) return;

    signMessage({ message: nonceResult.data });
    // Create SIWE message with pre-fetched nonce and sign with wallet
    // const message = new SiweMessage({
    //   domain: window.location.host,
    //   address: address.toLowerCase(), //轉小寫給簽名包起來
    //   statement: 'Bind your wallet to Monsterball.',
    //   uri: window.location.origin,
    //   version: '1',
    //   chainId,
    //   nonce: nonceResult.data,
    // });

    // const signature = await signMessageAsync({
    //   message: message.prepareMessage(),
    // });
    // if (!signature) return;
    // const verifyResult = await verifyBindWallet(
    //   session.token,
    //   address,
    //   signature
    // );
    // console.log(verifyResult);
    // if (verifyResult.code !== apiCodeConfig['success']) return;
    // bindWalletMutate();
    // setBindWalletLoading(false);
  };
  /* hander end */

  /* useEffect start */

  // scroll to specific element
  useEffect(() => {
    if (router.asPath) {
      let elem = document.getElementById(router.asPath.slice(2));

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [router.asPath]);

  // check page navbar type
  useEffect(() => {
    const page = router.pathname.split('/')[1];
    if (!page) return setPageType('index');
    return setPageType(page);
  }, [router.pathname]);

  //連線後去看他如果switch chain 要擋下
  useEffect(() => {
    if (!chain || !switchNetwork) return;
    if (chain?.id !== binanceChainId) {
      // show modal to switch chain or log out
      setSwitchAlertModalShow(true);
    }
  }, [chain, switchNetwork]);

  // 登入成功後如果沒有登入錢包跟綁定要跳視窗
  useEffect(() => {
    if (!session) return;
    if (isConnected && session.user.address) return;
    if (isConnected && bindWalletStatus) return;
    setConnectModalShow(true);
  }, [session]);

  // fix hydration problem
  // useEffect(() => {
  //   _setIsConnected(isConnected);
  // }, [isConnected]);
  /* useEffect end */

  return (
    <header className="my-navbar">
      <MyModal
        show={connectModalShow}
        onHide={() => setConnectModalShow(false)}
        content={
          <ConnectModal
            metamaskConnector={metamaskConnector}
            walletconnectConnector={walletconnectConnector}
            activeConnector={activeConnector}
            connectIsLoading={connectIsLoading}
            isConnected={isConnected}
            connect={connect}
            disconnect={disconnect}
            bindWalletLoading={bindWalletLoading}
            bindWalletStatus={bindWalletStatus}
            bindWalletHandler={bindWalletHandler}
            address={address}
          />
        }
        title={'Wallet setting'}
      />
      <MyModal
        show={switchAlertModalShow}
        content={
          <SwitchAlertModal
            switchNetwork={switchNetwork}
            binanceChainId={binanceChainId}
            switchIsLoading={switchIsLoading}
            activeConnector={activeConnector}
            disconnect={disconnect}
          />
        }
        title={'Check your network'}
        close={false}
      />
      {/* side navbar */}
      <AnimatePresence>
        {sidebarShow && <SideNavbar setSidebarShow={setSidebarShow} />}
      </AnimatePresence>
      <div className="navbar-content w-100 d-flex justify-content-between align-items-center">
        <div className="col-8 d-flex align-items-start">
          {/* logo */}
          <Link href={'/'} className="navbar-logo" passHref>
            <a>
              <div className="navbar-logo-mb">
                <Image src={navbarLogoMb} alt="logo" />
              </div>
              <div className="navbar-logo-pc">
                <Image src={navbarLogoPc} alt="logo" />
              </div>
            </a>
          </Link>
          {/* navbar pc */}
          <NavbarItems />
        </div>
        {/* hamburger */}
        <span className="cursor-pointer" onClick={() => setSidebarShow(true)}>
          <GiHamburgerMenu className="icon-hamburger" />
        </span>
        {/* navbar left */}
        <div className="d-lg-flex d-none col-4 justify-content-end align-items-center">
          {/* MFB count */}
          {isConnected && bindWalletStatus && (
            <div className="d-flex me-4">
              <div className="system-mfb-count me-3">
                <div style={{ position: 'absolute', top: '9px', left: '5px' }}>
                  <Image src={mfbImg} alt="mfb coin" width={20} height={20} />
                </div>
                <input type="text" disabled value={session.user.systemMfb} />
                <BsPlusLg
                  style={{
                    fontSize: '20px',
                    color: 'white',
                    paddingBottom: '5px',
                    marginLeft: '3px',
                  }}
                />
              </div>
            </div>
          )}
          {/* wallet btn */}
          {session && (
            <>
              {!isConnected ? (
                <div
                  className="navbar-wallet cursor-pointer me-4 position-relative"
                  onClick={() => {
                    setConnectModalShow(true);
                  }}
                  // disabled={!metamaskConnector.ready}
                >
                  <Image src={navbarWallet} alt="icon-wallet" className="" />
                  <div className="alert-icon">
                    <FiAlertTriangle
                      style={{
                        color: 'white',
                        fontSize: '18px',
                      }}
                    />
                  </div>
                  {/* error 除錯 */}
                  {/* {error && <div>{error.message}</div>} */}
                </div>
              ) : (
                <div className="position-relative">
                  <button
                    className="connected-wallet-btn me-4"
                    onClick={() => setConnectModalShow(true)}
                  >
                    {shortenAddress(address)}
                  </button>
                  {!bindWalletStatus && (
                    <div className="link-icon">
                      <BsLink45Deg
                        style={{
                          color: 'white',
                          fontSize: '18px',
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {/* google login */}
          <div className="d-flex">
            {!session ? (
              <button
                className="signin-btn"
                onClick={() => signIn('google', { redirect: false })}
              >
                Sign in
              </button>
            ) : (
              <div className="profile cursor-pointer ">
                <Link href="/account">
                  <Image
                    src={session.user.image}
                    alt="profile image"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* navbar bg image */}
      <div className="navbar-img">
        <Image
          src={
            pageType === 'dapp' &&
            currentWidth > process.env.NEXT_PUBLIC_XL_WIDTH
              ? navbarImageDapp
              : navbarImage
          }
          alt="navbar_image"
          layout={
            currentWidth > process.env.NEXT_PUBLIC_XXL_WIDTH ||
            currentWidth < process.env.NEXT_PUBLIC_SM_WIDTH
              ? 'fill'
              : 'responsive'
          }
          width={1920}
          height={pageType === 'dapp' ? 250 : 300}
          quality={100}
        />
      </div>
    </header>
  );
};

export default Navbar;
