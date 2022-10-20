import styles from '../../styles/Account.module.scss';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import MyNft from './MyNft';
import BindWallet from './BindWallet';
import TokenBuy from './TokenBuy';
import routeConfig from 'routeConfig';

// tabType : nft, bind , token

const Account = () => {
  const [tabType, setTabType] = useState('nft');

  return (
    <section className={`${styles.section}`}>
      <div className={styles.tab}>
        <button
          className="signout-btn m-auto"
          onClick={() => signOut({ callbackUrl: `${routeConfig.FRONT_END}` })}
        >
          Sign out
        </button>
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
          <li
            className={tabType === 'token' ? styles.active : ''}
            onClick={() => setTabType('token')}
          >
            Token
          </li>
        </ul>
      </div>
      {tabType === 'nft' && <MyNft />}
      {tabType === 'bind' && <BindWallet />}
      {tabType === 'token' && <TokenBuy />}
    </section>
  );
};

export default Account;
