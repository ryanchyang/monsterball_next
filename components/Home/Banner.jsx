import Image from 'next/image';
import coinMfb from '@/images/icon_NFTS_1.png';
import coinGold from '@/images/icon_gold_1.png';
import buyBtn from '@/images/btn_buy_1.png';
import { motion as m } from 'framer-motion';
import { fadeInFromLeft } from '../../utils/constants/framerConstant';
import { TbBrandTwitter } from 'react-icons/tb';
import { AiOutlineFacebook } from 'react-icons/ai';
import twitter from '@/images/home/btn_Twitter_1.png';
import facebook from '@/images/home/btn_Facebook_1.png';
import instagram from '@/images/home/btn_Instagram_1.png';
import twitch from '@/images/home/btn_Twitch_1.png';

const Banner = () => {
  return (
    <>
      <section className="banner d-flex flex-column">
        <div className="col d-flex flex-column justify-content-end justify-content-md-start">
          <m.h1
            className="banner-text-align"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <svg viewBox="0 0 439 84">
              <text className={'svgText--active'} x="0" y="50">
                MONSTERBALL
              </text>
            </svg>
          </m.h1>
          <m.h1
            className="color-darker-green banner-text-align"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="slowVisible"
            exit="exit"
          >
            <svg viewBox="0 0 439 84">
              <text className={'svgText--active'} x="0" y="50">
                ready to kick!!
              </text>
            </svg>
          </m.h1>
          <p className="col-10 col-lg-8 banner-text-align mx-auto mb-5">
            In a world full of monsters, form a strong football team and there
            are monsters of various attributes <br /> waiting for you to
            collect, come and enter this fantasy world!
          </p>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center position-relative">
          <div className="mb-5 d-flex flex-column flex-md-row align-items-center">
            <button className="banner-buy-btn m-0 mb-3 me-md-5 mb-md-0">
              <div>
                <Image
                  src={buyBtn}
                  alt="coin-mfb"
                  width={213}
                  height={81}
                  unoptimized
                />
                <div className="banner-btn-icon">
                  <div className="me-4">
                    <Image
                      src={coinMfb}
                      alt="coin-mfb"
                      width={61}
                      height={61}
                      unoptimized
                    />
                  </div>
                  <span data-text="Buy NFTS">Buy NFTS</span>
                </div>
              </div>
            </button>
            <button className="banner-buy-btn">
              <div>
                <Image
                  src={buyBtn}
                  alt="coin-mfb"
                  width={213}
                  height={81}
                  unoptimized
                />
                <div className="banner-btn-icon">
                  <div className="me-4">
                    <Image
                      src={coinGold}
                      alt="coinGold"
                      width={61}
                      height={61}
                      unoptimized
                    />
                  </div>
                  <span data-text="Buy Coins" className="yellow-text">
                    Buy Coins
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div className="social-links">
            <div>
              <Image src={twitter} alt="twitter logo" width={38} height={38} />
            </div>
            <div>
              <Image
                src={facebook}
                alt="facebook logo"
                width={38}
                height={38}
              />
            </div>
            <div>
              <Image
                src={instagram}
                alt="instagram logo"
                width={38}
                height={38}
              />
            </div>
            <div>
              <Image src={twitch} alt="twitch logo" width={38} height={38} />
            </div>
          </div>
        </div>
        {/* <div
          className="nft-item-card-img"
          style={{ position: 'absolute', right: -50, top: -310 }}
        >
          <Image src={fire} alt="" width={1000} height={1000} />
        </div> */}
      </section>
    </>
  );
};

export default Banner;
