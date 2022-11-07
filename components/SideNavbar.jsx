import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion as m } from 'framer-motion';
import {
  sideNavbarVariants,
  maskVariants,
} from 'utils/constants/framerConstant';
import NavbarRightMb from './NavbarRightMb';
import { signOut } from 'next-auth/react';
import routeConfig from 'routeConfig';

const SideNavbar = props => {
  const {
    setSidebarShow,
    isConnected,
    bindWalletStatus,
    userInfo,
    session,
    setConnectModalShow,
    address,
    signIn,
  } = props;
  const router = useRouter();
  return (
    <>
      <m.div
        className="mask"
        variants={maskVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => setSidebarShow(false)}
      ></m.div>
      <m.div
        className="side-navbar-area"
        variants={sideNavbarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <NavbarRightMb
          isConnected={isConnected}
          bindWalletStatus={bindWalletStatus}
          userInfo={userInfo}
          session={session}
          setConnectModalShow={setConnectModalShow}
          address={address}
          signIn={signIn}
        />
        <div className="side-navbar-list-wrapper d-flex flex-column justify-content-between">
          <ul className="sidebar-list">
            {session && (
              <li>
                <Link href={'/account'}>
                  <span
                    onClick={() => {
                      setSidebarShow(false);
                    }}
                  >
                    Account
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link href={'/'}>
                <span
                  onClick={() => {
                    setSidebarShow(false);
                  }}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href={'/play'}>
                <span
                  onClick={() => {
                    setSidebarShow(false);
                  }}
                >
                  Play Now
                </span>
              </Link>
            </li>
            <li>
              <Link href={'/market/market_place'}>
                <span
                  onClick={() => {
                    setSidebarShow(false);
                  }}
                >
                  MarketPlace
                </span>
              </Link>
            </li>
            <li>
              <span
                onClick={() => {
                  setSidebarShow(false);
                  window.open(
                    'https://monsterfootball-1.gitbook.io/untitled/',
                    '_blank'
                  );
                }}
              >
                LitePaper
              </span>
            </li>
            <li>
              <Link href={'/shop'}>
                <span
                  onClick={() => {
                    setSidebarShow(false);
                  }}
                >
                  Shop
                </span>
              </Link>
            </li>
          </ul>
          {session && (
            <div className="d-flex justify-content-center">
              <button
                className="signout-btn"
                onClick={() =>
                  signOut({ callbackUrl: `${routeConfig.FRONT_END}` })
                }
              >
                <span data-text="Sign out">Sign out</span>
              </button>
            </div>
          )}
        </div>
      </m.div>
    </>
  );
};

export default SideNavbar;
