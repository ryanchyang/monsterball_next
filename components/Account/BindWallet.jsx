import styles from '../../styles/Account.module.scss';

const BindWallet = () => {
  return (
    <div className={`col-md-6 col ${styles['bind-block']}`}>
      <div className={styles['input-block']}>
        <span>Current address</span>
        <input type="text" className={styles.input} />
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
