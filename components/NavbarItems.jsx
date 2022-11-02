import Link from 'next/link';
import { useRouter } from 'next/router';
const NavbarItems = props => {
  const { pageType } = props;
  return (
    <>
      <div className="navbar-pc">
        <ul className="w-100 d-flex justify-content-between">
          <li>
            <Link href={'/'} passHref>
              {/* <span data-text="Home" className="navbar-item--active">
                Home
              </span> */}
              <svg viewBox="0 0 110 70">
                {/* {pageType === 'index' && (
                  <rect
                    width="50"
                    height="20"
                    style={{ fill: 'rgb(0,0,0)' }}
                    x="40"
                    y="22"
                  />
                )} */}
                <text
                  className={
                    pageType === 'index' ? 'svgText--active' : 'svgText'
                  }
                  x="3"
                  y="45"
                >
                  Home
                </text>
              </svg>
            </Link>
          </li>
          <li>
            <Link href={'/play'}>
              {/* <span data-text="Play Now" className="navbar-item--active">
                Play Now
              </span> */}
              <svg viewBox="0 0 180 70">
                {/* {pageType === 'play' && (
                  <rect
                    width="50"
                    height="20"
                    style={{ fill: 'rgb(0,0,0)' }}
                    x="120"
                    y="22"
                  />
                )} */}
                <text
                  className={
                    pageType === 'play' ? 'svgText--active' : 'svgText'
                  }
                  x="10"
                  y="45"
                >
                  Play Now
                </text>
              </svg>
            </Link>
          </li>
          <li>
            <Link href={'/market/market_place'}>
              {/* <span>MarketPlace</span> */}
              <svg viewBox="0 0 220 70">
                <text
                  className={
                    pageType === 'market' ? 'svgText--active' : 'svgText'
                  }
                  x="10"
                  y="45"
                >
                  MarketPlace
                </text>
              </svg>
            </Link>
          </li>
          <li>
            <svg
              viewBox="0 0 180 70"
              onClick={() =>
                window.open(
                  'https://monsterfootball-1.gitbook.io/untitled/',
                  '_blank'
                )
              }
            >
              <text className="svgText" x="10" y="45">
                LitePaper
              </text>
            </svg>
          </li>
          <li>
            <Link href={'/shop'}>
              <svg viewBox="0 0 100 70">
                {/* {pageType === 'shop' && (
                  <rect
                    width="50"
                    height="20"
                    style={{ fill: 'rgb(0,0,0)' }}
                    x="40"
                    y="22"
                  />
                )} */}
                <text
                  className={
                    pageType === 'shop' ? 'svgText--active' : 'svgText'
                  }
                  x="10"
                  y="45"
                >
                  Shop
                </text>
              </svg>
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
