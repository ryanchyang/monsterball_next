import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Account.module.scss';
import { useState } from 'react';
import { dataPanel } from 'components/Market/MarketPlace/testData';
import { AiOutlineHeart } from 'react-icons/ai';
import { getUserMonster } from 'utils/api/user';
import { getUserInfo } from 'utils/api/user';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const MyNft = () => {
  const [tabType, setTabType] = useState('system');
  const [data, setData] = useState(dataPanel[0]);
  const [visible, setVisible] = useState(15);

  /* auth start */
  const { data: session, status: sessionStatus } = useSession();
  /* auth end */

  /* client fetching start */
  const { data: myMonster, mutate: myMonsterMutate } = useSWR(
    '/api/user/myMonster',
    () => getUserMonster(session.token)
  );
  console.log(myMonster);
  /* client fetching end */

  /* handler start */
  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 5);
  };
  /* handler end */
  return (
    <>
      {/* tab area */}
      <div className={styles['my-nft-subtab']}>
        <ul className="w-100 d-flex">
          <li
            className={tabType === 'system' ? `${styles.active} col` : 'col'}
            onClick={() => setTabType('system')}
          >
            System
          </li>
          <li
            className={tabType === 'wallet' ? `${styles.active} col` : 'col'}
            onClick={() => setTabType('wallet')}
          >
            Wallet
          </li>
        </ul>
      </div>
      {/* monster area */}
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
        {/* show more */}
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
