import { useEffect, useState } from 'react';
import styles from '../../styles/Swap.module.scss';
import formStyles from '../../styles/DappForm.module.scss';
import Image from 'next/image';
import { Dropdown } from 'react-bootstrap';
import { IoMdSettings, IoMdArrowDropdown } from 'react-icons/io';
import { CgTimer } from 'react-icons/cg';
import { HiSwitchVertical } from 'react-icons/hi';
import bnbIcon from '@/images/dapp/icon_bnb.png';
import {
  useAccount,
  useBalance,
  usePrepareSendTransaction,
  useSendTransaction,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from 'wagmi';
import useSWR from 'swr';
import Spinner from 'components/Spinner';
import { getQuote, getSwap } from 'utils/api/web3';
import useDebounce from 'utils/hooks/useDebounce';
import { tokenAbi } from '../../utils/constants/tokenAbi';
import { BigNumber } from 'ethers';
import MyToast from 'components/Modal/MyToast';
import apiCodeConfig from 'apiCodeConfig';

//bnb address 0xb8c77482e45f1f44de1745f52c74426c631bdd52
// goerli eth 0x7af963cF6D228E564e2A0aA0DdBF06210B38615D

//this is the only contract you can use if you decide to make transaction by our API.
const openOceanAddress = '0x6352a56caadc4f1e25cd6c75970fa768a3304e64';

const tokenList = {
  BNB: { token: 'BNB', address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' },
  USDT: {
    token: 'USDT',
    address: '0x55d398326f99059ff775485246999027b3197955',
  },
};

const bnbContract = {
  addressOrName: tokenList.BNB.address, // wagmi版本命名問題
  contractInterface: tokenAbi, // wagmi版本命名問題
};
const usdtContract = {
  addressOrName: tokenList.USDT.address, // wagmi版本命名問題
  contractInterface: tokenAbi, // wagmi版本命名問題
};

const approveConfig = {
  functionName: 'approve',
  args: [
    openOceanAddress,
    '115792089237316195423570985008687907853269984665640564039457584007913129639935', // max
  ],
};

const Swap = () => {
  const [fromToken, setFromToken] = useState(tokenList.USDT);
  const [toToken, setToToken] = useState(tokenList.BNB);
  const [value, setValue] = useState('');
  // const [valueExchanged, setValueExchanged] = useState('');
  const [fromDropdownShow, setFromDropdownShow] = useState(false);
  const [toDropdownShow, setToDropdownShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const [toastContent, setToastContent] = useState({ title: '', content: '' });

  const debounceValue = useDebounce(value, 500);

  /* web3 start */

  const { config } = usePrepareContractWrite({
    ...usdtContract,
    ...approveConfig,
  });

  const {
    data: approve,
    isLoading: approveLoading,
    isSuccess: approveSuccess,
    write: approveWrite,
  } = useContractWrite(config);

  const { address, connector: activeConnector, isConnected } = useAccount();

  const { data: bnbBalance } = useBalance({
    addressOrName: address,
  });

  const { data: usdtBalance } = useBalance({
    addressOrName: address,
    token: tokenList.USDT.address,
  });

  const { data: isApproved } = useContractRead({
    ...usdtContract,
    functionName: 'allowance',
    args: [address, openOceanAddress],
  });

  const {
    data: quote,
    mutate: quoteMutate,
    isValidating: quoteValidating,
  } = useSWR(
    Number(value).valueOf() !== 0
      ? ['fetchQuote', debounceValue, fromToken]
      : null,
    () => getQuote(fromToken.address, toToken.address, value)
    // { refreshInterval: 5000 } // 每五秒fetch一次
  );

  const {
    data: quoteSwap,
    mutate: quoteSwapMutate,
    isValidating: quoteSwapValidating,
  } = useSWR(
    quote || Number(value).valueOf() !== 0 ? ['fetchConfig', quote] : null,
    () => getSwap(fromToken.address, toToken.address, value, address)
  );
  console.log(quoteSwap);
  const { data, isLoading, error, isSuccess, sendTransaction } =
    useSendTransaction({
      request: {
        from: address,
        to: openOceanAddress,
        gasLimit: BigNumber.from(
          !quoteSwapValidating && quoteSwap ? quoteSwap.estimatedGas : '0'
        ),
        gasPrice: BigNumber.from(
          !quoteSwapValidating && quoteSwap ? quoteSwap.gasPrice : '0'
        ),
        data: quoteSwap?.data ?? '',
      },

      onError(error) {
        if (error.code === apiCodeConfig['web3_rejectTransaction']) {
          setToastContent({
            title: 'Error',
            content: 'User rejected Transaction',
          });
          setToastShow(true);
        }
      },
    });

  /* web3 end */

  /* Handler start */

  const changeValueHandler = e => {
    setValue(e.target.value);
    // setValueExchanged('');
  };

  const toTokenAmountHandler = () => {
    if (Number(value).valueOf === 0 || quoteValidating || !quote) return '';
    return quote.outAmount / 1e18;
  };

  const approveHandler = async () => {
    approveWrite();
  };

  const swapHandler = async () => {
    sendTransaction();
  };
  /* Handler end */

  return (
    <section className={styles['swap-area']}>
      {/* <div id="rubic-widget-root"></div> */}
      {/* <iframe
        src="https://poocoin.app/embed-swap"
        
      ></iframe> */}
      <div className="d-flex justify-content-center">
        {/* openocean widget */}
        {/* <div className="swap-block">
          <iframe
            src="https://widget.openocean.finance"
            width="420"
            height="630"
          ></iframe>
        </div> */}
      </div>
      <div className={styles['form-area']}>
        <MyToast
          show={toastShow}
          setShow={setToastShow}
          title={toastContent.title}
          content={toastContent.content}
        />
        <div className={formStyles.block}>
          <div className={formStyles.header}>
            <div className="d-flex">
              <h2 className="w-100 p-3">Exchange</h2>
              <div className="w-100 p-3 d-flex justify-content-end">
                <IoMdSettings className={formStyles.icon} />
                <CgTimer className={formStyles.icon} />
              </div>
            </div>
            <p className="p-3">AMM and yield farm on Binance Smart Chain. </p>
          </div>
          <div className={formStyles.body}>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">From</span>
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
                      <span>{fromToken.token}</span>
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
                      eventKey={fromToken.token}
                    >
                      {fromToken.token}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* from input */}
              <div className="p-3 position-relative">
                <input
                  type="number"
                  className={formStyles.input}
                  value={value}
                  onChange={changeValueHandler}
                  min={0}
                  max={
                    fromToken.token === 'BNB'
                      ? bnbBalance?.formatted
                      : usdtBalance?.formatted
                  }
                  placeholder="0"
                />
                <button
                  className={formStyles.inputBtn}
                  onClick={() =>
                    setValue(
                      fromToken.token === 'BNB'
                        ? bnbBalance?.formatted
                        : usdtBalance?.formatted
                    )
                  }
                >
                  MAX
                </button>
              </div>
              <div className="px-4 d-flex justify-content-end">
                <small className="text-white">
                  Balance:
                  {fromToken.token === 'BNB'
                    ? bnbBalance?.formatted
                    : usdtBalance?.formatted}
                  {fromToken.token === 'BNB'
                    ? bnbBalance?.symbol
                    : usdtBalance?.symbol}
                </small>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <HiSwitchVertical
                className={formStyles['switch-icon']}
                onClick={() => {
                  setFromToken(
                    fromToken.token === 'BNB' ? tokenList.USDT : tokenList.BNB
                  );
                  setToToken(
                    toToken.token === 'BNB' ? tokenList.USDT : tokenList.BNB
                  );
                  setValue('');
                }}
              />
            </div>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">To</span>
                <Dropdown
                  onToggle={() => setToDropdownShow(!toDropdownShow)}
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
                      <span>{toToken.token}</span>
                      <IoMdArrowDropdown
                        className={formStyles['sort-icon']}
                        style={
                          toDropdownShow
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
                      eventKey={toToken.token}
                    >
                      {toToken.token}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="p-3 position-relative">
                <input
                  type="text"
                  className={formStyles.input}
                  value={toTokenAmountHandler()}
                  readOnly
                />
                {quoteValidating && (
                  <div
                    className="spinner-container"
                    style={{
                      position: 'absolute',
                      left: 130,
                    }}
                  >
                    <Spinner />
                  </div>
                )}
                {/* <button className={formStyles.inputBtn}>MAX</button> */}
              </div>
              {/* <div className="px-4 d-flex justify-content-end">
                <small className="text-white">Balance: 0.243092</small>
              </div> */}
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex w-100">
              {/* 如果input金額為0 */}
              {Number(value).valueOf() !== 0 ? (
                <>
                  {/* 如果input金額大於餘額 */}
                  {Number(value).valueOf() <=
                  (fromToken.token === 'BNB'
                    ? bnbBalance?.formatted
                    : usdtBalance?.formatted) ? (
                    <>
                      <div className="col-6 text-center position-relative">
                        <button
                          className={`${formStyles['swap-btn']} mx-auto mb-5`}
                          onClick={approveHandler}
                          disabled={isApproved.toString() !== '0'}
                        >
                          Approve
                        </button>
                        <span
                          className={`${formStyles['step-circle']} ${
                            isApproved.toString() !== '0' &&
                            formStyles['active']
                          }`}
                        >
                          1
                        </span>
                        {/* Status bar */}
                        <span
                          className={
                            formStyles[
                              `${
                                isApproved.toString() !== '0'
                                  ? 'step-bar--50'
                                  : 'step-bar'
                              }`
                            ]
                          }
                        ></span>
                      </div>
                      <div className="col-6 text-center">
                        <button
                          className={`${formStyles['swap-btn']} mx-auto mb-5`}
                          onClick={swapHandler}
                          disabled={quoteSwapValidating || quoteValidating}
                        >
                          SWAP
                        </button>
                        <span className={formStyles['step-circle']}>2</span>
                      </div>
                    </>
                  ) : (
                    <div className="m-auto text-center position-relative">
                      <button
                        className={`${formStyles['swap-btn']} mx-auto w-100`}
                        disabled={true}
                      >
                        Insufficient amount
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="m-auto text-center position-relative">
                  <button
                    className={`${formStyles['swap-btn']} mx-auto w-100`}
                    disabled={true}
                  >
                    Enter amount
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
