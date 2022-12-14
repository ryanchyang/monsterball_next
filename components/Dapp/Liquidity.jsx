import { useState } from 'react';
import styles from '../../styles/Swap.module.scss';
import formStyles from '../../styles/DappForm.module.scss';
import Image from 'next/image';
import { Dropdown } from 'react-bootstrap';
import { IoMdSettings, IoMdArrowDropdown } from 'react-icons/io';
import { CgTimer } from 'react-icons/cg';
import { BsPlusLg } from 'react-icons/bs';
import { HiSwitchVertical } from 'react-icons/hi';
import bnbIcon from '@/images/dapp/icon_bnb.png';

const Liquidity = () => {
  const [fromDropdownShow, setFromDropdownShow] = useState(false);
  return (
    <section
      className={`${styles['swap-area']} d-flex flex-column flex-xl-row`}
    >
      {/* liquidity form */}
      <div className={styles['form-area']}>
        <div className={formStyles.block}>
          <div className={formStyles.header}>
            <div className="d-flex">
              <h2 className="w-100 p-3">Add Liquidity</h2>
              <div className="w-100 p-3 d-flex justify-content-end">
                <IoMdSettings className={formStyles.icon} />
                <CgTimer className={formStyles.icon} />
              </div>
            </div>
            <p className="p-3">Add liquidity to receive LP tokens</p>
          </div>
          <div className={formStyles.body}>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">Input</span>
                <Dropdown
                  onToggle={() => setFromDropdownShow(!fromDropdownShow)}
                  onSelect={eventKey => 1}
                >
                  <Dropdown.Toggle
                    className={styles['dropdown-toggle']}
                    style={{
                      width: '120px',
                      height: '40px',
                      backgroundColor: 'transparent',
                      borderRadius: '15px',
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-2 pt-1">
                        <Image
                          src={bnbIcon}
                          alt="bnb-icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>BNB</span>
                      <IoMdArrowDropdown
                        className={formStyles['sort-icon']}
                        style={
                          fromDropdownShow
                            ? { transform: 'rotate(180deg)' }
                            : { transition: 'rotate(0deg)' }
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      marginTop: '0',
                      borderRadius: '15px',
                      width: '100%',
                      backgroundColor: '#f1eacf',
                      overflow: 'hidden',
                    }}
                  >
                    <Dropdown.Item
                      className={styles['dropdown-menu-item']}
                      eventKey={'BNB'}
                    >
                      BNB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="p-3 position-relative">
                <input type="text" className={formStyles.input} />
                <button className={formStyles.inputBtn}>MAX</button>
              </div>
              <div className="px-4 d-flex justify-content-end">
                <small className="text-white">Balance: 0.243092</small>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <BsPlusLg className={formStyles['plus-icon']} />
            </div>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">Input</span>
                <Dropdown
                  onToggle={() => setFromDropdownShow(!fromDropdownShow)}
                  onSelect={eventKey => 1}
                >
                  <Dropdown.Toggle
                    className={styles['dropdown-toggle']}
                    style={{
                      width: '120px',
                      height: '40px',
                      backgroundColor: 'transparent',
                      borderRadius: '15px',
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-2 pt-1">
                        <Image
                          src={bnbIcon}
                          alt="bnb-icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>BNB</span>
                      <IoMdArrowDropdown
                        className={formStyles['sort-icon']}
                        style={
                          fromDropdownShow
                            ? { transform: 'rotate(180deg)' }
                            : { transition: 'rotate(0deg)' }
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      marginTop: '0',
                      borderRadius: '15px',
                      width: '100%',
                      backgroundColor: '#f1eacf',
                      overflow: 'hidden',
                    }}
                  >
                    <Dropdown.Item
                      className={styles['dropdown-menu-item']}
                      eventKey={'BNB'}
                    >
                      BNB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="p-3 position-relative">
                <input type="text" className={formStyles.input} />
                <button className={formStyles.inputBtn}>MAX</button>
              </div>
              <div className="px-4 d-flex justify-content-end">
                <small className="text-white">Balance: 0.243092</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className={formStyles['swap-btn']}>SWAP</button>
          </div>
        </div>
      </div>
      {/* MFB-BUSD LP */}
      <div className={styles['form-area']}>
        <div className={formStyles.block}>
          <div
            className={`${formStyles.header} d-flex flex-column align-items-end border-bottom border-white pb-4`}
          >
            <div className="d-flex">
              <h2 className="w-100 p-3">MFB-BUSD LP</h2>
            </div>
            <p className="p-3">Stake LP tokens to earn MFB</p>
          </div>
          <div className={formStyles.body}>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">Input</span>
                <Dropdown
                  onToggle={() => setFromDropdownShow(!fromDropdownShow)}
                  onSelect={eventKey => 1}
                >
                  <Dropdown.Toggle
                    className={styles['dropdown-toggle']}
                    style={{
                      width: '120px',
                      height: '40px',
                      backgroundColor: 'transparent',
                      borderRadius: '15px',
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-2 pt-1">
                        <Image
                          src={bnbIcon}
                          alt="bnb-icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>BNB</span>
                      <IoMdArrowDropdown
                        className={formStyles['sort-icon']}
                        style={
                          fromDropdownShow
                            ? { transform: 'rotate(180deg)' }
                            : { transition: 'rotate(0deg)' }
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      marginTop: '0',
                      borderRadius: '15px',
                      width: '100%',
                      backgroundColor: '#f1eacf',
                      overflow: 'hidden',
                    }}
                  >
                    <Dropdown.Item
                      className={styles['dropdown-menu-item']}
                      eventKey={'BNB'}
                    >
                      BNB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="p-3 position-relative">
                <input type="text" className={formStyles.input} />
                <button className={formStyles.inputBtn}>MAX</button>
              </div>
              <div className="px-4 d-flex justify-content-end">
                <small className="text-white">Balance: 0.243092</small>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <BsPlusLg className={formStyles['plus-icon']} />
            </div>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">Input</span>
                <Dropdown
                  onToggle={() => setFromDropdownShow(!fromDropdownShow)}
                  onSelect={eventKey => 1}
                >
                  <Dropdown.Toggle
                    className={styles['dropdown-toggle']}
                    style={{
                      width: '120px',
                      height: '40px',
                      backgroundColor: 'transparent',
                      borderRadius: '15px',
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-2 pt-1">
                        <Image
                          src={bnbIcon}
                          alt="bnb-icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>BNB</span>
                      <IoMdArrowDropdown
                        className={formStyles['sort-icon']}
                        style={
                          fromDropdownShow
                            ? { transform: 'rotate(180deg)' }
                            : { transition: 'rotate(0deg)' }
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      marginTop: '0',
                      borderRadius: '15px',
                      width: '100%',
                      backgroundColor: '#f1eacf',
                      overflow: 'hidden',
                    }}
                  >
                    <Dropdown.Item
                      className={styles['dropdown-menu-item']}
                      eventKey={'BNB'}
                    >
                      BNB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="p-3 position-relative">
                <input type="text" className={formStyles.input} />
                <button className={formStyles.inputBtn}>MAX</button>
              </div>
              <div className="px-4 d-flex justify-content-end">
                <small className="text-white">Balance: 0.243092</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className={formStyles['swap-btn']}>SWAP</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liquidity;
