import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper';
import memberFrame from '@/images/home/team/david_frame.png';
// import memberImg from '@/images/home/team/david_frame.png;
import frame from '@/images/home/team_frame.png';
import frameMb from '@/images/home/team_frame_mb.png';
import arrowLeft from '@/images/home/btn_arrow_L_1.png';
import arrowLeftHover from '@/images/home/btn_arrow_L_2.png';
import arrowRight from '@/images/home/btn_arrow_R_1.png';
import arrowRightHover from '@/images/home/btn_arrow_R_2.png';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';
import { turnNestedArr } from 'utils/helpers/TurnNestedArr';

const Team = () => {
  const [swiper, setSwiper] = useState(null);
  const currentWidth = useCurrentWidth();

  console.log(turnNestedArr([1, 2, 3, 4, 5, 6, 7, 8], 2));
  const prevto = () => {
    swiper.slidePrev();
  };
  const nexto = () => {
    swiper.slideNext();
  };
  const memberCardTemplate = i => {
    return (
      <div className="team-card font-BoldenVan">
        <div className="team-member-img">
          <Image src={memberFrame} alt="" width={350} height={330} />
        </div>
        <h4 className="text-primary mb-2 mt-3">Gary Perkovac</h4>
        <p className="member-position">{i}</p>
        {/* <p className="member-title">NFTs global strategy director</p> */}
      </div>
    );
  };
  const memberCountPerSlide = arr => {
    if (currentWidth < process.env.NEXT_PUBLIC_MD_WIDTH)
      return (
        <SwiperSlide key={i}>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            {memberCardTemplate(i)}
            {memberCardTemplate(i)}
            {memberCardTemplate(i)}
            {memberCardTemplate(i)}
          </div>
        </SwiperSlide>
      );
  };
  return (
    <section className="team-area">
      <div className="team-frame">
        <h2 data-text="Team" className="team-title">
          Team
        </h2>
        {currentWidth > process.env.NEXT_PUBLIC_MD_WIDTH ? (
          <>
            <Image
              src={frame}
              alt="team frame"
              width={1610}
              height={575}
              quality={100}
              priority
            />
          </>
        ) : (
          <>
            <Image
              src={frameMb}
              alt="team frame"
              width={370}
              height={600}
              quality={100}
              priority
            />
          </>
        )}
        {/* 電腦板顯示 */}
        <div className="team-card-block">
          {/* <h2 className="text-center opacity-0">Team</h2> */}
          <div>
            <div className="mx-auto">
              <Swiper
                slidesPerView={
                  currentWidth > process.env.NEXT_PUBLIC_MD_WIDTH &&
                  currentWidth < process.env.NEXT_PUBLIC_LG_WIDTH
                    ? 1
                    : 2
                }
                spaceBetween={0}
                loop={false}
                modules={[Pagination]}
                pagination={true}
                className="team-swiper"
                onSwiper={s => {
                  setSwiper(s);
                }}
              >
                {/* {memberCountPerSlide(arr)} */}
              </Swiper>
            </div>
            {currentWidth > process.env.NEXT_PUBLIC_SM_WIDTH ? (
              <>
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
              </>
            ) : null}
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      {/* 手機板顯示 */}
      {/* <div className="team-card-block">
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
      </div> */}
    </section>
  );
};

export default Team;
