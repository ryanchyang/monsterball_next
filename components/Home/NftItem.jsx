import Image from 'next/image';
import dark from '@/images/home/nftItem/dark-idle.gif';
import fire from '@/images/home/nftItem/fire-idle.gif';
import light from '@/images/home/nftItem/light-idle.gif';
import water from '@/images/home/nftItem/water-idle.gif';

// Import Swiper styles
import 'swiper/css';

const NftItem = () => {
  return (
    <section id="nft_item" className="nft-item-area">
      <div className="nft-item-content d-flex flex-column align-items-center col col-lg-8 mx-auto">
        <h2 className="mb-sm-4 mb-0 text-center text-white">NFT Display</h2>
        <h4 className="mb-0 mb-sm-5">BUY. SELL. COLLECT.</h4>
        <p className="col col-sm-9 col-xxl-6">
          The things you earn and buy in Monsterball are yours to own. {''}
          {`That's`} right - each Monster is an NFT which means that they hold
          value and can be sold and bought on our marketplace. Stay tuned for
          news about the release of our marketplace
        </p>
        {/* <button
          className="nft-item-btn mt-4"
          onClick={() =>
            window.open(
              'https://monsterfootball-1.gitbook.io/untitled/',
              '_blank'
            )
          }
        >
          READ WHITE PAPER
        </button> */}
      </div>
      <div className="nft-item-monster-block">
        <ul className="nft-item-monster-list">
          <li className="nft-item-card">
            <div className="nft-item-card-img dark">
              <Image src={dark} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <Image src={fire} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <Image src={light} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <Image src={water} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img dark">
              <Image src={dark} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <Image src={fire} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <Image src={light} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <Image src={water} alt="" layout="responsive" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img dark">
              <Image src={dark} alt="" layout="responsive" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NftItem;
