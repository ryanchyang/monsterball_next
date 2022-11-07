import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";
import memberFrame from "@/images/home/team/david_frame.png";
// import memberImg from '@/images/home/team/david_frame.png;
import frame from "@/images/home/team_frame.png";
import frameMb from "@/images/home/team_frame_mb.png";
import arrowLeft from "@/images/home/btn_arrow_L_1.png";
import arrowLeftHover from "@/images/home/btn_arrow_L_2.png";
import arrowRight from "@/images/home/btn_arrow_R_1.png";
import arrowRightHover from "@/images/home/btn_arrow_R_2.png";
import useCurrentWidth from "utils/hooks/useCurrentWidth";
import { turnNestedArr } from "utils/helpers/TurnNestedArr";

const Team = () => {
  const [swiper, setSwiper] = useState(null);
  const currentWidth = useCurrentWidth();

  const prevto = () => {
    swiper.slidePrev();
  };
  const nexto = () => {
    swiper.slideNext();
  };
  const memberCardTemplate = (i) => {
    return (
      <div className="team-card font-BoldenVan">
        <div className="team-member-img me-0 me-md-4 me-lg-0">
          <Image src={memberFrame} alt="" width={350} height={330} />
        </div>
        <div>
          <h4 className="text-primary mb-2 mt-3">Gary Perkovac</h4>
          <p className="member-position">{i}</p>
        </div>

        {/* <p className="member-title">NFTs global strategy director</p> */}
      </div>
    );
  };
  const memberCountPerSlide = (arr) => {
    if (currentWidth < process.env.NEXT_PUBLIC_MD_WIDTH) {
      return turnNestedArr(arr, 4).map((arr, i) => (
        <SwiperSlide key={i}>
          <div className="team-card-grid ">
            {arr.map((v) => memberCardTemplate(v))}
          </div>
        </SwiperSlide>
      ));
    }
    if (currentWidth < process.env.NEXT_PUBLIC_LG_WIDTH) {
      return turnNestedArr(arr, 2).map((arr, i) => (
        <SwiperSlide key={i}>
          <div className="team-card-grid ">
            {arr.map((v) => memberCardTemplate(v))}
          </div>
        </SwiperSlide>
      ));
    }
    return turnNestedArr(arr, 4).map((arr, i) => (
      <SwiperSlide key={i}>
        <div className="d-flex">{arr.map((v) => memberCardTemplate(v))}</div>
      </SwiperSlide>
    ));
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

          <div className="mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              modules={[Pagination]}
              pagination={true}
              className="team-swiper"
              onSwiper={(s) => {
                setSwiper(s);
              }}
            >
              {memberCountPerSlide([1, 2, 3, 4, 5, 6, 7, 8])}
            </Swiper>
          </div>
          <div class="swiper-pagination"></div>
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
