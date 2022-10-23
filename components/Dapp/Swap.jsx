import { useEffect, useState } from "react";
import styles from "../../styles/Swap.module.scss";
import formStyles from "../../styles/DappForm.module.scss";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import { IoMdSettings, IoMdArrowDropdown } from "react-icons/io";
import { CgTimer } from "react-icons/cg";
import { HiSwitchVertical } from "react-icons/hi";
import bnbIcon from "@/images/dapp/icon_bnb.png";
import { useAccount, useBalance } from "wagmi";
import useSWR from "swr";
import axios from "axios";
import { getQuote } from "utils/api/web3";

const Swap = () => {
  const [fromToken, setFromToken] = useState(
    "0x7af963cF6D228E564e2A0aA0DdBF06210B38615D" // goerli eth
  ); //bnb address 0xb8c77482e45f1f44de1745f52c74426c631bdd52
  const [toToken, setToToken] = useState(
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  ); // wbnb address
  const [value, setValue] = useState("1000000000000000000");
  const [valueExchanged, setValueExchanged] = useState("");

  const [fromDropdownShow, setFromDropdownShow] = useState(false);
  const [toDropdownShow, setToDropdownShow] = useState(false);

  const { address, connector: activeConnector, isConnected } = useAccount();

  const { data: balance } = useBalance({
    addressOrName: address,
  });
  console.log(balance);

  const { data: quote, mutat: quoteMutate } = useSWR("fetchQuote", () =>
    getQuote(fromToken, toToken, value)
  );

  // console.log(quote);
  /* Handler start */

  const changeValueHandler = (e) => {
    setValue(e.target.value * 1e18);
    setValueExchanged("");
  };
  /* Handler end */

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     var configuration = {
  //       from: 'ETH',
  //       to: 'RBC',
  //       fromChain: 'ETH',
  //       toChain: 'ETH',
  //       amount: 1,
  //       iframe: 'flex',
  //       hideSelectionFrom: false,
  //       hideSelectionTo: false,
  //       theme: 'dark',
  //       background: '#28372e',
  //       injectTokens: {
  //         eth: ['0xd123575d94a7ad9bff3ad037ae9d4d52f41a7518'],
  //         bsc: ['0x8aed24bf6e0247be51c57d68ad32a176bf86f4d9'],
  //       },
  //       slippagePercent: {
  //         instantTrades: 2,
  //         crossChain: 5,
  //       },
  //       promoCode: 'a1bc4da1f2',
  //       fee: 0.075,
  //       feeTarget: '0xecA0A3eFCf009519052Dc92306fE821b9c7A32A2',
  //     };
  //     // prevent accidental changes to the object, for example, when re-creating a widget for another theme
  //     Object.freeze(configuration);
  //     // create widget
  //     rubicWidget.init(configuration);
  //   }
  // }, []);

  return (
    <section className={styles["swap-area"]}>
      <div id="rubic-widget-root"></div>
      <div className={styles["form-area"]}>
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
                  onSelect={(eventKey) => 1}
                >
                  <Dropdown.Toggle
                    className={styles["dropdown-toggle"]}
                    style={{
                      width: "120px",
                      height: "40px",
                      backgroundColor: "transparent",
                      borderRadius: "15px",
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
                        className={formStyles["sort-icon"]}
                        style={
                          fromDropdownShow
                            ? { transform: "rotate(180deg)" }
                            : { transition: "rotate(0deg)" }
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      marginTop: "0",
                      borderRadius: "15px",
                      width: "100%",
                      backgroundColor: "#f1eacf",
                      overflow: "hidden",
                    }}
                  >
                    <Dropdown.Item
                      className={styles["dropdown-menu-item"]}
                      eventKey={"BNB"}
                    >
                      BNB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* from input */}
              <div className="p-3 position-relative">
                <input
                  type="number"
                  className={formStyles.input}
                  value={value / 1e18}
                  onChange={changeValueHandler}
                  min={0}
                  max={balance?.formatted}
                />
                <button className={formStyles.inputBtn}>MAX</button>
              </div>
              <div className="px-4 d-flex justify-content-end">
                <small className="text-white">
                  Balance: {balance?.formatted}
                  {balance?.symbol}
                </small>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <HiSwitchVertical className={formStyles["switch-icon"]} />
            </div>
            {/* input block */}
            <div>
              <div className="p-3 w-100 d-flex align-items-center">
                <span className="w-100 t-16">To</span>
                <Dropdown
                  onToggle={() => setToDropdownShow(!toDropdownShow)}
                  onSelect={(eventKey) => 1}
                >
                  <Dropdown.Toggle
                    className={styles["dropdown-toggle"]}
                    style={{
                      width: "120px",
                      height: "40px",
                      backgroundColor: "transparent",
                      borderRadius: "15px",
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
                      <span>USDT</span>
                      <IoMdArrowDropdown
                        className={formStyles["sort-icon"]}
                        style={
                          toDropdownShow
                            ? { transform: "rotate(180deg)" }
                            : { transition: "rotate(0deg)" }
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      marginTop: "0",
                      borderRadius: "15px",
                      width: "100%",
                      backgroundColor: "#f1eacf",
                      overflow: "hidden",
                    }}
                  >
                    <Dropdown.Item
                      className={styles["dropdown-menu-item"]}
                      eventKey={"USDT"}
                    >
                      USDT
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="p-3 position-relative">
                <input type="text" className={formStyles.input} />
                <button className={formStyles.inputBtn}>MAX</button>
              </div>
              {/* <div className="px-4 d-flex justify-content-end">
                <small className="text-white">Balance: 0.243092</small>
              </div> */}
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className={formStyles["swap-btn"]}>SWAP</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
