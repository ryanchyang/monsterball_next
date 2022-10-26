import styles from '../../styles/Account.module.scss';
import Image from 'next/image';
import mfbImg from '@/images/coin_mfb.png';

const TokenBuy = props => {
  const { systemAddress, userInfo } = props;

  console.log(systemAddress);
  return (
    <>
      <div className={`${styles['token-buy']} col-md-6 col m-auto d-flex`}>
        <div className="me-4">
          <Image src={mfbImg} alt="" width={250} height={250} />
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <h3 className="mb-5">Current system MFB : ${userInfo.mfb}</h3>
          <div>
            <div className="d-flex mb-5">
              <input type="text" className={styles['input']} />
              <button className={styles['btn']}>Charge</button>
            </div>
            <div className="d-flex">
              <input type="text" className={styles['input']} />
              <button className={styles['btn']}>Withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenBuy;
