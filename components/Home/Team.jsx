import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import memberImg from '@/images/home/team/david.png';

const Team = () => {
  const memberCardTemplate = () => {
    return (
      <div className="team-card font-BoldenVan">
        <div className="team-member-img">
          <Image src={memberImg} alt="" />
        </div>
        <h4 className="text-primary mb-2 mt-3">Gary Perkovac</h4>
        <p className="member-position">COO</p>
        <p className="member-title">NFTs global strategy director</p>
      </div>
    );
  };
  return (
    <section className="team-area">
      <h2 className="mb-4 text-center">Team</h2>
      {/* 手機板顯示 */}
      <div className="team-card-block">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
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
      <div className="team-card-grid">
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
        <div>{memberCardTemplate()}</div>
      </div>
    </section>
  );
};

export default Team;
