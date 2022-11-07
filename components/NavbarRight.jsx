import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { BsPlusCircleFill, BsLink45Deg } from 'react-icons/bs';
import { FiAlertTriangle } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { shortenAddress } from 'utils/helpers/shortenAddress';
import mfbImg from '@/images/coin_mfb.png';
import navbarWallet from '@/images/header/btn_money.png';
import routeConfig from 'routeConfig';
import { moveDown } from 'utils/constants/framerConstant';

const NavbarRight = props => {
  const {
    isConnected,
    bindWalletStatus,
    userInfo,
    session,
    setConnectModalShow,
    address,
    signIn,
  } = props;
  const [accountMenuShow, setAccountMenuShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="d-lg-flex d-none justify-content-end align-items-center">
        {/* MFB count */}
        {isConnected && bindWalletStatus && (
          <div className="d-flex me-4 justify-content-between">
            <div className="system-mfb-count me-3 flex-nowrap">
              <div style={{ position: 'absolute', top: '12px', left: '10px' }}>
                <Image src={mfbImg} alt="mfb coin" width={20} height={20} />
              </div>
              <input type="text" readOnly value={userInfo?.mfb} />
              <BsPlusCircleFill className="buy" />
            </div>
          </div>
        )}
        {/* wallet btn */}
        {session && (
          <>
            {!isConnected ? (
              <div
                className="navbar-wallet cursor-pointer me-5 position-relative"
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
              <div className="position-relative me-5">
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
        <div className="d-flex">
          {!session ? (
            <button
              className="signin-btn"
              onClick={() => signIn('google', { redirect: false })}
            >
              <span data-text="Sign in">Sign in</span>
            </button>
          ) : (
            <div
              className="position-relative"
              onMouseEnter={() => {
                setAccountMenuShow(true);
              }}
            >
              <div className="profile cursor-pointer">
                <Image
                  src={session.user.image}
                  alt="profile image"
                  width={50}
                  height={50}
                />
              </div>
              <AnimatePresence>
                {accountMenuShow ? (
                  <m.div
                    className="dropdown-account"
                    variants={moveDown}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseLeave={() => {
                      setAccountMenuShow(false);
                    }}
                  >
                    <div
                      className="w-100 d-flex justify-content-between mb-4"
                      onClick={() => router.push('/account')}
                    >
                      <MdAccountCircle />
                      Account
                    </div>
                    <div
                      className="w-100 d-flex justify-content-between"
                      onClick={() =>
                        signOut({ callbackUrl: `${routeConfig.FRONT_END}` })
                      }
                    >
                      <FaSignOutAlt />
                      Sign out
                    </div>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarRight;
