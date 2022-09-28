import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion as m } from 'framer-motion';
import {
  sideNavbarVariants,
  maskVariants,
} from 'utils/constants/framerConstant';

const SideNavbar = props => {
  const { setSidebarShow } = props;

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
        <ul className="sidebar-list w-100 d-flex flex-column justify-content-between t-16 font-BoldenVan">
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
              }}
            >
              Gamplay
            </span>
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
              Paper
            </span>
          </li>
          <li>
            <Link href="/#roadmap" scroll={false}>
              <span
                onClick={() => {
                  setSidebarShow(false);
                }}
              >
                Road map
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#nft_item" scroll={false}>
              <span
                onClick={() => {
                  setSidebarShow(false);
                }}
              >
                NFT item
              </span>
            </Link>
          </li>
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
                router.push('/market/market_place');
              }}
            >
              Market
            </span>
          </li>
          <li>
            <span>DApp</span>
          </li>
          <li>
            <span>Invite</span>
          </li>
          <li>
            <span>Play</span>
          </li>
          <li>
            <button className="sidebar-connect-btn">Connect wallet</button>
          </li>
        </ul>
      </m.div>
    </>
  );
};

export default SideNavbar;
