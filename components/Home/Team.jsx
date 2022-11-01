import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import memberFrame from '@/images/home/team/team_avatar.svg';
import memberImg from '@/images/home/team/david.png';
import frame from '@/images/home/team_frame.png';
import arrowLeft from '@/images/home/btn_arrow_L_1.png';
import arrowLeftHover from '@/images/home/btn_arrow_L_2.png';
import arrowRight from '@/images/home/btn_arrow_R_1.png';
import arrowRightHover from '@/images/home/btn_arrow_R_2.png';

const Team = () => {
  const [swiper, setSwiper] = useState(null);

  const prevto = () => {
    swiper.slidePrev();
  };
  const nexto = () => {
    swiper.slideNext();
  };
  const memberCardTemplate = () => {
    return (
      <div className="team-card font-BoldenVan">
        <div className="team-member-img">
          <Image src={memberFrame} alt="" width={350} height={306} />
        </div>
        <h4 className="text-primary mb-2 mt-3">Gary Perkovac</h4>
        <p className="member-position">COO</p>
        <p className="member-title">NFTs global strategy director</p>
      </div>
    );
  };
  return (
    <section className="team-area">
      <div className="team-frame">
        <Image
          src={frame}
          alt="team frame"
          width={1886}
          height={807}
          quality={100}
          priority
        />
      </div>
      <h2 className="text-center team-title">Team</h2>
      {/* 手機板顯示 */}

      <div className="team-card-block">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
        </Swiper>
      </div>
      {/* 電腦板顯示 */}

      <div className="team-card-block-pc">
        <div className="col-11 mx-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            loop={true}
            className="mySwiper"
            onSwiper={s => {
              setSwiper(s);
            }}
          >
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
            <SwiperSlide>{memberCardTemplate()}</SwiperSlide>
          </Swiper>
        </div>
        <div onClick={prevto} className="swiper-btn mybtn-prev">
          <div className="unhover">
            <Image
              src={arrowLeft}
              alt="prev button"
              width={62}
              height={175}
              quality={100}
              priority
            />
          </div>
          <div className="hover">
            <Image
              src={arrowLeftHover}
              alt="prev button"
              width={62}
              height={175}
              quality={100}
              priority
            />
          </div>
        </div>
        <div onClick={nexto} className="swiper-btn mybtn-next">
          <div className="unhover">
            <Image
              src={arrowRight}
              alt="next button"
              width={62}
              height={175}
              quality={100}
              priority
            />
          </div>
          <div className="hover">
            <Image
              src={arrowRightHover}
              alt="next button"
              width={62}
              height={175}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
