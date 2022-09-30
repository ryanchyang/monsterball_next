import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi';
import { shortenAddress } from '../utils/helpers/shortenAddress';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideNavbar from './SideNavbar';
import MyModal from './MyModal';
import Spinner from './Spinner';
import navbarImage from '@/images/header/menu_bg.png';
import navbarImageDapp from '@/images/header/DApp_header.png';
import navbarLogoMb from '@/images/logo_mb.png';
import navbarLogoPc from '@/images/logo_pc.png';
import navbarWallet from '@/images/header/btn_money.png';
import metamaskLogo from '@/images/metamask.png';
import walletconnectLogo from '@/images/walletconnect.png';
import { AnimatePresence } from 'framer-motion';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';

const binanceChainId = 97;

const Navbar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const [connectModalShow, setConnectModalShow] = useState(false);
  const [switchAlertModalShow, setSwitchAlertModalShow] = useState(false);
  const [pageType, setPageType] = useState();

  const currentWidth = useCurrentWidth();
  const router = useRouter();

  // web3 hook start
  const {
    connect,
    connectors,
    activeConnector,
    isLoading: connectIsLoading,
    error,
  } = useConnect({
    onSuccess(data) {
      setConnectModalShow(false);
    },
    chainId: binanceChainId,
  });
  const { disconnect } = useDisconnect({
    onSuccess(data) {
      setConnectModalShow(false);
      setSwitchAlertModalShow(false);
    },
  });
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork, isLoading: switchIsLoading } = useSwitchNetwork({
    onSuccess(data) {
      setSwitchAlertModalShow(false);
    },
  });

  // web3 hook end
  const connector = connectors[0]; // 連接Metamask

  /* handler start */
  const layoutHandler = () => {};
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
  /* useEffect end */

  const connectModalContent = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button
        className="connect-wallet-metamask-btn mb-3"
        onClick={() => connect({ connector })}
        disabled={!connector.ready || connectIsLoading || isConnected}
      >
        {connectIsLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <div>
          <Image src={metamaskLogo} alt="metamask-button" />
        </div>
      </button>
      <button className="connect-wallet-metamask-btn" disabled={true}>
        <div>
          <Image src={walletconnectLogo} alt="walletconnect-button" />
        </div>
      </button>
      {isConnected && (
        <button className="disconnect-wallet-btn mt-5" onClick={disconnect}>
          <span>{`Disconnect from ${connector.name}`}</span>
        </button>
      )}
    </div>
  );
  const switchAlertModalContent = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="mb-5">
        Currently this page only supported in BNB Smart Chain Testnet. Please
        switch your network to continue.
      </p>
      <button
        className="switch-network-btn mb-4"
        onClick={() => switchNetwork(binanceChainId)}
        disabled={switchIsLoading}
      >
        {switchIsLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <span>Switch network in wallet</span>
      </button>
      <button className="disconnect-wallet-btn" onClick={disconnect}>
        <span>{`Disconnect from ${connector.name}`}</span>
      </button>
    </div>
  );

  return (
    <header className="my-navbar">
      <MyModal
        show={connectModalShow}
        onHide={() => setConnectModalShow(false)}
        content={connectModalContent}
        title={'Connect Wallet'}
      />
      <MyModal
        show={switchAlertModalShow}
        content={switchAlertModalContent}
        title={'Check your network'}
        close={false}
      />
      <AnimatePresence>
        {sidebarShow && <SideNavbar setSidebarShow={setSidebarShow} />}
      </AnimatePresence>
      <div className="navbar-content w-100 d-flex justify-content-between align-items-center">
        <div className="w-100 d-flex align-items-start">
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
          <div className="navbar-pc">
            <ul className="w-100 d-flex justify-content-between t-16 font-BoldenVan">
              <li>
                <Link href={'/#video'} passHref>
                  <span>Gamplay</span>
                </Link>
              </li>
              <li>
                <span
                  onClick={() =>
                    window.open(
                      'https://monsterfootball-1.gitbook.io/untitled/',
                      '_blank'
                    )
                  }
                >
                  Paper
                </span>
              </li>
              <li>
                <Link href={'/#roadmap'} scroll={false}>
                  <a>
                    <span>Road map</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/#nft_item'} scroll={false}>
                  <a>
                    <span>NFT item</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/market/market_place'}>
                  <a>
                    <span>Market</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/dapp/swap'}>
                  <span>DApp</span>
                </Link>
              </li>
              <li>
                <Link href={'/invite'}>
                  <span>Invite</span>
                </Link>
              </li>
              <li>
                <span>Play</span>
              </li>
            </ul>
          </div>
        </div>
        {/* hamburger */}
        <span className="cursor-pointer" onClick={() => setSidebarShow(true)}>
          <GiHamburgerMenu className="icon-hamburger" />
        </span>
        {/* wallet */}
        {!isConnected ? (
          <div
            className="navbar-wallet cursor-pointer "
            onClick={() => setConnectModalShow(true)}
            disabled={!connector.ready}
          >
            <Image src={navbarWallet} alt="icon-wallet" className="" />
            {/* error 除錯 */}
            {/* {error && <div>{error.message}</div>} */}
          </div>
        ) : (
          <button
            className="connected-wallet-btn"
            onClick={() => setConnectModalShow(true)}
          >
            <div>{shortenAddress(address)}</div>
          </button>
        )}
      </div>
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
