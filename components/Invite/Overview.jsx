import styles from '../../styles/Invite.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { Dropdown } from 'react-bootstrap';

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
        <div className="w-100 d-flex justify-content-between align-items-center">
          <h2 className="w-100">Detailed</h2>
          <div className="w-100 d-flex justify-content-end position-relative">
            <input type="text" className={styles['detail-input']} />
            <AiOutlineSearch className={styles['search-icon']} />
          </div>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              width: '100%',
              height: '40px',
              backgroundColor: 'transparent',
              borderRadius: '0',
              border: 'none',
              borderBottom: '1px solid #f1eacf',
            }}
          ></Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              marginTop: '-30px',
              borderRadius: '15px',
              width: '100%',
              backgroundColor: '#f1eacf',
            }}
          >
            <Dropdown.Item className={styles['dropdown-menu-item']} href="/#">
              Time
            </Dropdown.Item>
            <Dropdown.Item className={styles['dropdown-menu-item']} href="/#">
              Address
            </Dropdown.Item>
            <Dropdown.Item className={styles['dropdown-menu-item']} href="/#">
              MFB commission income
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </div>
  );
};

export default InviteOverview;
