import styles from '../../styles/Invite.module.scss';
import Image from 'next/image';
import coinMfb from '@/images/coin_mfb.png';
import coinGold from '@/images/coin_gold.png';
import { motion as m } from 'framer-motion';
import { fadeInFromLeft } from 'utils/constants/framerConstant';

const InViteBanner = () => {
  return (
    <section className={`${styles['invite-banner']} banner d-flex flex-column`}>
      <div className="col-sm-12 col-md-12  col-xl-6 col-12 d-flex flex-column justify-content-center">
        <m.h2
          className="banner-text-align"
          variants={fadeInFromLeft}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Invitation Rewards Program
        </m.h2>
        <m.h3
          className={`${styles.subtitle} color-darker-green banner-text-align font-BoldenVan`}
          variants={fadeInFromLeft}
          initial="hidden"
          animate="slowVisible"
          exit="exit"
        >
          (refer a friend to earn coins together)
        </m.h3>
        <p className="font-BoldenVan text-primary px-2 banner-text-align text-start mx-lg-0 mx-5 mb-5">
          Invite friends to join the game and earn great rewards together!
          <br />
          If a friend you invite buys a blind box via the link
          <br />
          Up to 12% of the price will be rewarded to you as an invitation
        </p>
      </div>
      <div className="d-flex justify-content-center justify-content-xl-start">
        <div className="me-4">
          <button className="banner-btn-green font-BoldenVan">
            <div className="banner-btn-icon">
              <Image src={coinMfb} alt="coin-mfb" />
            </div>
            <span>BUY MFB</span>
          </button>
        </div>
        <button className="banner-btn-bluegreen font-BoldenVan">
          <div
            className="banner-btn-icon"
            style={{ width: '20px', height: '20px' }}
          >
            <Image src={coinGold} alt="buy-gold" />
          </div>
          BUY GOLD
        </button>
      </div>
    </section>
  );
};

export default InViteBanner;
