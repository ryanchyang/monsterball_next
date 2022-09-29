import { useState } from 'react';
import styles from '../../styles/Invite.module.scss';
import { Dropdown } from 'react-bootstrap';
import { AiOutlineSearch, AiOutlineArrowDown } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';
import { motion as m } from 'framer-motion';
import { maskVariants } from '../../utils/constants/framerConstant';

const dropdownItem = [
  { id: 0, title: 'Time' },
  { id: 1, title: 'Address' },
  { id: 2, title: 'MFB commission income' },
];

// { title: eventKey, orderBy: 'asc' } selectedItem template
const InviteOverview = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  const currentWidth = useCurrentWidth();

  const orderByHandler = e => {
    if (e) e.stopPropagation();
    if (selectedItem.orderBy === 'asc')
      return setSelectedItem({ ...selectedItem, orderBy: 'desc' });
    if (selectedItem.orderBy === 'desc') return setSelectedItem(null);
  };

  const orderByPcHandler = item => {
    if (item.title === selectedItem?.title) return orderByHandler();
    return setSelectedItem({ title: item.title, orderBy: 'asc' });
  };

  const orderByPcIconHandler = item => {
    // 有狀態顯示狀態arrow
    // 如果沒有狀態看hover狀態
    if (item.title === selectedItem?.title)
      return (
        <AiOutlineArrowDown
          className={styles['orderBy-icon']}
          style={
            selectedItem.orderBy === 'asc'
              ? { transform: 'rotate(180deg)' }
              : { transition: 'rotate(0deg)' }
          }
        />
      );
    return (
      <m.div
        variants={maskVariants}
        animate={hoverItem === item.title ? 'visible' : 'hidden'}
      >
        <AiOutlineArrowDown
          className={styles['orderBy-icon']}
          style={{ transform: 'rotate(180deg)' }}
        />
      </m.div>
    );
  };

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
        <div className="w-100 d-flex justify-content-between align-items-center mb-5">
          <h2 className="w-100">Detailed</h2>
          <div className="w-100 d-flex justify-content-end position-relative">
            <input type="text" className={styles['detail-input']} />
            <AiOutlineSearch className={styles['search-icon']} />
          </div>
        </div>
        {currentWidth < process.env.NEXT_PUBLIC_SM_WIDTH && (
          <table className="w-100">
            <thead>
              <tr>
                <th scope="col">
                  <Dropdown
                    onToggle={() => setDropdownShow(!dropdownShow)}
                    onSelect={eventKey =>
                      setSelectedItem({ title: eventKey, orderBy: 'asc' })
                    }
                  >
                    <Dropdown.Toggle
                      style={{
                        width: '100%',
                        height: '50px',
                        backgroundColor: 'transparent',
                        borderRadius: '0',
                        border: 'none',
                        borderBottom: '2px solid #f1eacf',
                      }}
                    >
                      <span
                        className={
                          dropdownShow || selectedItem
                            ? styles['sort-by-sm']
                            : styles['sort-by']
                        }
                        style={{ transition: '0.2s' }}
                      >
                        Sort by
                      </span>
                      <IoMdArrowDropdown
                        className={styles['sort-icon']}
                        style={
                          dropdownShow
                            ? { transform: 'rotate(180deg)' }
                            : { transition: 'rotate(0deg)' }
                        }
                      />
                      {/* sort button */}
                      {selectedItem && (
                        <button
                          className={styles['sort-btn']}
                          onClick={orderByHandler}
                        >
                          {selectedItem.title}
                          <AiOutlineArrowDown
                            className={styles['orderBy-icon']}
                            style={
                              selectedItem.orderBy === 'asc'
                                ? { transform: 'rotate(180deg)' }
                                : { transition: 'rotate(0deg)' }
                            }
                          />
                        </button>
                      )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className={`my-dropdown-menu`}
                      style={{
                        marginTop: '-45px',
                        borderRadius: '15px',
                        width: '100%',
                        backgroundColor: '#f1eacf',
                        overflow: 'hidden',
                      }}
                    >
                      {dropdownItem.map(item => (
                        <Dropdown.Item
                          key={item.id}
                          className={styles['dropdown-menu-item']}
                          eventKey={item.title}
                          // href="/#"
                        >
                          {item.title}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white font-BoldenVan">no data available</td>
              </tr>
            </tbody>
          </table>
        )}
        {currentWidth >= process.env.NEXT_PUBLIC_SM_WIDTH && (
          <table className={styles['table-pc']}>
            <thead>
              <tr>
                {dropdownItem.map(item => (
                  <th
                    className="cursor-pointer"
                    key={item.id}
                    scope="col"
                    onClick={() => orderByPcHandler(item)}
                    onMouseEnter={() => setHoverItem(item.title)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <div className="d-flex align-items-center">
                      {item.title}
                      {orderByPcIconHandler(item)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white font-BoldenVan">no data available</td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default InviteOverview;
