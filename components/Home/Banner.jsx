import Image from "next/image";
import coinMfb from "@/images/icon_NFTS_1.png";
import coinGold from "@/images/icon_gold_1.png";
import buyBtn from "@/images/btn_buy_1.png";
import { motion as m } from "framer-motion";
import { fadeInFromLeft } from "../../utils/constants/framerConstant";

const Banner = () => {
  return (
    <>
      <section className="banner d-flex flex-column">
        <div className="col d-flex flex-column">
          <m.h1
            className="banner-text-align t-70"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <svg viewBox="0 0 439 84">
              <text className={"svgText--active"} x="0" y="50">
                MONSTERBALL
              </text>
            </svg>
          </m.h1>
          <m.h1
            className="color-darker-green banner-text-align t-70"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="slowVisible"
            exit="exit"
          >
            <svg viewBox="0 0 439 84">
              <text className={"svgText--active"} x="0" y="50">
                ready to kick!!
              </text>
            </svg>
          </m.h1>
          <p className="col-8 banner-text-align mx-auto">
            In a world full of monsters, form a strong football team and there
            are monsters of various attributes <br /> waiting for you to
            collect, come and enter this fantasy world!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="banner-buy-btn me-5">
            <div>
              <Image
                src={buyBtn}
                alt="coin-mfb"
                width={275}
                height={105}
                unoptimized
              />
              <div className="banner-btn-icon">
                <div className="me-4">
                  <Image
                    src={coinMfb}
                    alt="coin-mfb"
                    width={80}
                    height={80}
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
                width={275}
                height={105}
                unoptimized
              />
              <div className="banner-btn-icon">
                <div className="me-4">
                  <Image
                    src={coinGold}
                    alt="coinGold"
                    width={80}
                    height={80}
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
