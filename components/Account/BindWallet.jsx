import styles from '../../styles/Account.module.scss';
import { useSession } from 'next-auth/react';

const BindWallet = () => {
  /* auth start */
  const { data: session, status: sessionStatus } = useSession();

  /* auth end */
  return (
    <div className={`col-md-6 col ${styles['bind-block']}`}>
      <div className={styles['input-block']}>
        <span>Current address</span>
        <div className="d-flex flex-xl-row flex-column">
          <input
            type="text"
            className={styles.input}
            disabled={!!session?.address}
          />
          <button className={`${styles.btn} ms-0 ms-xl-4`}>Modify</button>
        </div>
      </div>
      <div className={styles['input-block']}>
        <span>Verify code</span>
        <div className="d-flex flex-xl-row flex-column">
          <input type="text" className={styles.input} />
          <div className="d-flex">
            <button className={styles.btn}>Get</button>
            <button className={styles.btn}>Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BindWallet;
