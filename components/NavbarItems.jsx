import Link from 'next/link';

const NavbarItems = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarItems;
