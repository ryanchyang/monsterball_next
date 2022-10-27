import styles from '../../styles/Account.module.scss';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import MyNft from './MyNft';
import BindWallet from './BindWallet';
import TokenBuy from './TokenBuy';
import routeConfig from 'routeConfig';
import useSWR from 'swr';
import { getUserMonster, getUserInfo } from 'utils/api/user';
import { getChargeMfbAddress } from 'utils/api/mfb';
import { getShopMonsters } from 'utils/api/monster';
import { useSession } from 'next-auth/react';
import { useAccount } from 'wagmi';

// tabType : nft, bind , token

const Account = () => {
  const [tabType, setTabType] = useState('nft');

  /* auth start */
  const { data: session, status: sessionStatus } = useSession();
  /* auth end */

  const { address } = useAccount();

  /* client fetching start */
  const { data: myMonster, mutate: myMonsterMutate } = useSWR(
    '/api/user/myMonster',
    () => getUserMonster(session.token),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { data: systemAddress } = useSWR(
    '/deposit/info',
    () => getChargeMfbAddress(session.token),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { data: userInfo, mutate: userInfoMutate } = useSWR(
    !address || !session ? null : '/api/user/userInfo',
    () => getUserInfo(session.token),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  /* client fetching end */

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
      {tabType === 'nft' && <MyNft myMonster={myMonster} />}
      {tabType === 'bind' && <BindWallet userInfo={userInfo} />}
      {tabType === 'token' && (
        <TokenBuy systemAddress={systemAddress} userInfo={userInfo} />
      )}
    </section>
  );
};

export default Account;
