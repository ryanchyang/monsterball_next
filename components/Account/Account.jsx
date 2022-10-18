import styles from '../../styles/Account.module.scss';
import { useState } from 'react';
import MyNft from './MyNft';
import BindWallet from './BindWallet';

// tabType : nft, bind

const Account = () => {
  const [tabType, setTabType] = useState('nft');

  return (
    <section className={`${styles.section}`}>
      <div className={styles.tab}>
        <ul className="d-flex justify-content-center">
          <li
            className={tabType === 'nft' ? styles.active : ''}
            onClick={() => setTabType('nft')}
          >
            My NFT
          </li>
          <li
            className={tabType === 'bind' ? styles.active : ''}
            onClick={() => setTabType('bind')}
          >
            Wallet Bind
          </li>
        </ul>
      </div>
      {tabType === 'nft' && <MyNft />}
      {tabType === 'bind' && <BindWallet />}
    </section>
  );
};

export default Account;
