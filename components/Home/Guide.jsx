import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
import arrowLeft from '@/images/home/btn_arrow_L_1.png';
import arrowLeftHover from '@/images/home/btn_arrow_L_2.png';
import arrowRight from '@/images/home/btn_arrow_R_1.png';
import arrowRightHover from '@/images/home/btn_arrow_R_2.png';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';
const Guide = () => {
  const [swiper, setSwiper] = useState(null);
  const currentWidth = useCurrentWidth();

  const prevto = () => {
    swiper.slidePrev();
  };

  const nexto = () => {
    swiper.slideNext();
  };

  return (
    <>
      <section id="roadmap" className="guide-area">
        <h2 className="text-center pb-0 pb-md-3 pb-lg-5">
          Gameplay Model & Guide
        </h2>
        <div className="col col-lg-10 mx-auto mt-5">
          <Swiper
            // navigation={true}
            // navigation={{
            //   prevEl: navigationPrevRef.current,
            //   nextEl: navigationNextRef.current,
            // }}
            // modules={[Navigation]}
            modules={[Pagination]}
            pagination={true}
            loop={true}
            onSwiper={s => {
              setSwiper(s);
            }}
            className="guide-swiper"
          >
            <div>
              {[1, 1, 1].map((_, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="video"
                    style={{
                      width: '95%',
                      height: `${
                        currentWidth > process.env.NEXT_PUBLIC_LG_WIDTH
                          ? '40vw'
                          : '60vw'
                      }`,
                      borderRadius: '30px',
                      backgroundColor: 'black',
                      margin: '0 auto',
                      overflow: 'hidden',
                    }}
                  >
                    {/* <video
                      className="introVideo"
                      width="100%"
                      height="auto"
                      controls="controls"
                      autoPlay="autoplay"
                      muted="muted"
                      loop="loop"
                      playsInline=""
                    >
                      <source
                        // src={'/assets/video/index_vedio.mp4'}
                        src={'https://www.youtube.com/watch?v=Zsnt2Xm1NBo'}
                        type="video/youtube"
                      />
                    </video> */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Zsnt2Xm1NBo"
                      title="派大星反霸凌"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {currentWidth > process.env.NEXT_PUBLIC_LG_WIDTH ? (
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
      </section>
    </>
  );
};

export default Guide;
