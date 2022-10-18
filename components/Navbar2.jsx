import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navbarLogoPc from '@/images/logo_pc.png';
import navbarWallet from '@/images/header/btn_money.png';
import MyModal from './Modal/MyModal';

const Navbar2 = () => {
  const [modalShow, setModalShow] = useState(false);

  const modalContent = (
    <div className="">
      <h3>Place a Bid</h3>
      <p className="text-center">
        You must bid at least{' '}
        <span className="price color-popup">4.89 ETH</span>
      </p>
      <input type="text" className="form-control" placeholder="00.00 ETH" />
      <p>
        Enter quantity. <span className="color-popup">5 available</span>
      </p>
      <input type="number" className="form-control" placeholder="1" />
      <div className="hr"></div>
      <div className="d-flex justify-content-between">
        <p> You must bid at least:</p>
        <p className="text-right price color-popup"> 4.89 ETH </p>
      </div>
      <div className="d-flex justify-content-between">
        <p> Service free:</p>
        <p className="text-right price color-popup"> 0,89 ETH </p>
      </div>
      <div className="d-flex justify-content-between">
        <p> Total bid amount:</p>
        <p className="text-right price color-popup"> 4 ETH </p>
      </div>
      <Link
        href="/wallet-connect"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#popup_bid_success"
        data-dismiss="modal"
        aria-label="Close"
      >
        {' '}
        Place a bid
      </Link>
    </div>
  );

  return (
    <header className="my-navbar2">
      {/* 測試modal */}
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={modalContent}
        title={'Place your bid'}
      />
      <div className="navbar-content w-100 d-flex justify-content-between align-items-center">
        <div className="w-100 d-flex align-items-start">
          {/* logo */}
          <Link href="/" className="navbar-logo" passHref>
            <div className="navbar-logo-pc">
              <Image src={navbarLogoPc} alt="logo" />
            </div>
          </Link>
          {/* navbar pc */}
          <div className="navbar2-pc">
            <ul className="navbar2-title w-100 d-flex justify-content-between t-16 font-BoldenVan">
              <li>
                <Link href="/market/blind_box">
                  <span>Blind Box</span>
                </Link>
              </li>
              <li>
                <Link href="/market/market_place">
                  <span>Marketplace</span>
                </Link>
              </li>
              <li>
                <Link href="/market/my_nfts">
                  <span>My NFTs</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* wallet */}
        <div className="navbar-wallet" onClick={() => setModalShow(true)}>
          <Image src={navbarWallet} alt="icon-wallet" className="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
