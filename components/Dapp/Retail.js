import styles from '../../styles/Swap.module.scss';
import { BiCoinStack } from 'react-icons/bi';

const Retail = () => {
  return (
    <div className={styles['retail-area']}>
      <div className={styles['top-area']}>
        {/* contract */}
        <div className={styles['contract-area']}>
          <div className={`${styles['contract-block']} mb-4`}>
            <span className="me-5">Gold Contract</span>
            <span>0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622Aa1</span>
          </div>
          <div className={styles['contract-block']}>
            <span className="me-5">MFB Contract</span>
            <span>0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622A33</span>
          </div>
        </div>
        {/* buy coin */}
        <div className={styles['buy-area']}>
          <button className={`${styles['buy-btn']} me-4`}>
            <span className="me-2">MFB BUY</span>
            <BiCoinStack />
          </button>
          <button className={styles['buy-btn']}>
            <span className="me-2">GOLD BUY</span>
            <BiCoinStack />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Retail;
