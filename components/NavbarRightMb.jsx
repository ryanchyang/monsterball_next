import Link from 'next/link';
import Image from 'next/image';
import { BsPlusLg, BsLink45Deg } from 'react-icons/bs';
import { FiAlertTriangle } from 'react-icons/fi';
import { shortenAddress } from 'utils/helpers/shortenAddress';
import mfbImg from '@/images/coin_mfb.png';
import navbarWallet from '@/images/header/btn_money.png';

const NavbarRightMb = props => {
  const {
    isConnected,
    bindWalletStatus,
    userInfo,
    session,
    setConnectModalShow,
    address,
    signIn,
  } = props;
  return (
    <>
      <div className="d-flex flex-column-reverse d-block d-lg-none justify-content-center align-items-center">
        {/* MFB count */}
        {isConnected && bindWalletStatus && (
          <div className="d-flex justify-content-between mfb-buy-mb-wrapper">
            <div className="system-mfb-count me-3 flex-nowrap">
              <div style={{ position: 'absolute', top: '12px', left: '10px' }}>
                <Image src={mfbImg} alt="mfb coin" width={20} height={20} />
              </div>
              <input type="text" readOnly value={userInfo?.mfb} />
            </div>
            <button className="mfb-buy-mb-btn">
              <span data-text="+">+</span>
            </button>
          </div>
        )}
        {/* wallet btn */}
        {session && (
          <>
            {!isConnected ? (
              <div
                className="navbar-wallet cursor-pointer me-0 me-lg-4 position-relative"
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
              <div className="position-relative mb-4">
                <button
                  className="connected-wallet-btn"
                  onClick={() => setConnectModalShow(true)}
                >
                  <span data-text={shortenAddress(address)}>
                    {shortenAddress(address)}
                  </span>
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
        <div className="d-flex mt-5 mt-lg-0">
          {!session ? (
            <button
              className="signin-btn"
              onClick={() => signIn('google', { redirect: false })}
            >
              <span data-text="Sign in">Sign in</span>
            </button>
          ) : (
            <div className="d-flex flex-column align-items-center mb-5">
              <div className="profile cursor-pointer mb-4">
                <Link href="/account">
                  <Image
                    src={session.user.image}
                    alt="profile image"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <span className="t-16">{userInfo?.name}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarRightMb;
