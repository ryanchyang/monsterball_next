import styles from '../../styles/Invite.module.scss';

const InviteOverview = () => {
  return (
    <div className={styles['overview-area']}>
      <section>
        <h2 className="mb-3">Overview</h2>
        <div className={styles['overview-content-block']}>
          <div className="d-flex flex-column flex-xl-row">
            <div className={styles['overview-text-block']}>
              <p className="mb-3">Subordinate purchase income</p>
              <span>0 MFB</span>
              <small>≈ NaN BUSD</small>
            </div>
            <div className={styles['overview-text-block']}>
              <p className="mb-3">Subordinate transaction revenue</p>
              <span>0 MFB</span>
              <small>≈ NaN BUSD</small>
            </div>
            <div className={styles['overview-text-block']}>
              <p className="mb-3">Incoming pending</p>
              <span>0 MFB</span>
              <small>≈ NaN BUSD</small>
            </div>
            <div className={styles['overview-text-block']}>
              <p className="mb-3">Your friends</p>
              <span>0</span>
            </div>
          </div>

          <button className={styles['claim-btn']}>CLAIM</button>
        </div>
      </section>
      <section>
        <div className="d-flex">
          <h2 className="mb-3">Detailed</h2>
          <div>
            <input type="text" className={styles.input} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InviteOverview;
