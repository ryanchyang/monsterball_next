import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Account.module.scss';
import { useState } from 'react';
import { dataPanel } from 'components/Market/MarketPlace/testData';
import { AiOutlineHeart } from 'react-icons/ai';

const MyNft = () => {
  const [data, setData] = useState(dataPanel[0]);
  const [visible, setVisible] = useState(15);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 5);
  };
  return (
    <>
      <div className={styles['card-block']}>
        {data.dataContent.slice(0, visible).map((item, key) => (
          <div key={key} className={styles['card']}>
            <div className="d-flex flex-column">
              <div className={`mb-4 ${styles['card-media']}`}>
                <Image
                  src={item.img}
                  alt="monster"
                  layout={'responsive'}
                  objectFit={'cover'}
                />

                <div className="featured-countdown">
                  <span className="slogan"></span>
                </div>
              </div>
              <div className="card-title mb-3">
                <h5>
                  <Link href="item-details.html">{item.title}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))}

        {visible < data.dataContent.length && (
          <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
            <Link
              href="/#"
              className="sc-button loadmore fl-button pri-3"
              onClick={showMoreItems}
            >
              <span>Load More</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MyNft;
