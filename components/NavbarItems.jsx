import Link from 'next/link';
import { useRouter } from 'next/router';
const NavbarItems = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <div className="navbar-pc">
        <ul className="w-100 d-flex justify-content-between">
          <li>
            <Link href={'/#video'} passHref>
              <span data-text="Home" className="navbar-item--active">
                Home
              </span>
              {/* <svg viewBox="0 0 220 66">
                <text className="svgText" x="45" y="45">
                  Home
                </text>
              </svg> */}
            </Link>
          </li>
          <li>
            <Link href={'/play'}>
              <span data-text="Play Now" className="navbar-item--active">
                Play Now
              </span>
            </Link>
          </li>
          <li>
            <Link href={'/market/market_place'}>
              <span>MarketPlace</span>
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
              LitePaper
            </span>
          </li>
          <li>
            <Link href={'/shop'}>
              <span>Shop</span>
            </Link>
          </li>
          {/* <li>
            <Link href={'/#roadmap'} scroll={false}>
              <a>
                <span>Road map</span>
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href={'/#nft_item'} scroll={false}>
              <a>
                <span>NFT item</span>
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href={'/dapp/swap'}>
              <span>DApp</span>
            </Link>
          </li> */}
          {/* <li>
            <Link href={'/invite'}>
              <span>Invite</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default NavbarItems;
