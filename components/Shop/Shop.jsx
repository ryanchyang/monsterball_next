import styles from '../../styles/Shop.module.scss';
import useSWR from 'swr';
import Image from 'next/image';
import { getShopMonsters } from 'utils/api/monster';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';

const Shop = () => {
  const { data: shopMonster, mutate: shopMonsterMutate } = useSWR(
    '/api/shop/item',
    () => getShopMonsters(),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log(shopMonster);
  return (
    <section className={`${styles.section}`}>
      <h2>Shop</h2>
      <div className="d-flex flex-column flex-lg-row col-10 m-auto">
        <div className="col-lg-6 col">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={styles.swiper}
          >
            {!!shopMonster ? (
              <>
                {shopMonster.map(monster => (
                  <SwiperSlide key={monster.id}>
                    <div className={styles['image-wrapper']}>
                      <Image
                        src={monster.imgUrl}
                        alt={monster.type}
                        layout="responsive"
                        width={492}
                        height={608}
                        objectFit="cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </>
            ) : null}
          </Swiper>
        </div>
        <div className="col-lg-6 col">
          <div className={`${styles['skill-block']} `}>
            <div className={styles['skill-item']}></div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mt-5"
            style={{ width: '500px' }}
          >
            <h3 className={styles.price}>
              {!!shopMonster && shopMonster[0].price} MFB
            </h3>
            <button className={styles.btn}>BUY</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
