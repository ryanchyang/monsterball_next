import styles from '../../styles/DappSubNavbar.module.scss';
import Link from 'next/link';

const SubNavbar = () => {
  return (
    <div className={styles.subnavbar}>
      <ul className={styles.list}>
        <li>
          <Link href="/dapp/swap">
            <a>Swap</a>
          </Link>
        </li>
        <li>
          <Link href="/dapp/liquidity">
            <a>Liquidity</a>
          </Link>
        </li>
        <li>
          <Link href="/dapp/mfb_pool">
            <a>MFB Pool</a>
          </Link>
        </li>
        <li>
          <Link href="/dapp/wallet">
            <a>Wallet</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
