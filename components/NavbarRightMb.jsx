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
      <div className="d-flex flex-column d-block d-lg-none justify-content-center align-items-center">
        {/* MFB count */}
        {isConnected && bindWalletStatus && (
          <div className="d-flex me-4">
            <div className="system-mfb-count me-3">
              <div style={{ position: 'absolute', top: '9px', left: '5px' }}>
                <Image src={mfbImg} alt="mfb coin" width={20} height={20} />
              </div>
              <input type="text" disabled value={userInfo?.mfb} />
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
              <span data-text="Sign in">Sign in</span>
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
    </>
  );
};

export default NavbarRightMb;
