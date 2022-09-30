import styles from '../../styles/DappSubNavbar.module.scss';

const SubNavbar = () => {
  return (
    <div className={styles.subnavbar}>
      <ul className={styles.list}>
        <li>
          <a>Swap</a>
        </li>
        <li>
          <a>Liquidity</a>
        </li>
        <li>
          <a>MFB Pool</a>
        </li>
        <li>
          <a>Wallet</a>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
