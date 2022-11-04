import { RiDiscordLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={'my-footer'}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>Follow Us</h2>
        <form className="mb-4 mb-lg-0 d-flex flex-column flex-lg-row">
          <input
            className="email-input mb-4 me-lg-5"
            type="text"
            placeholder="Email"
          />
          <button className="footer-subscribe-btn" data-text="Subscribe">
            <span>Subscribe</span>
          </button>
        </form>
        {/* <div className="d-flex align-items-center text-primary">
          <RiDiscordLine className="t-24 my-3 mx-3" />
          <AiOutlineTwitter className="t-24 my-3 mx-3" />
          <FaTelegramPlane className="t-24 my-3 mx-3" />
          <BsInstagram className="t-22 my-3 mx-3" />
          <MdEmail className="t-24 my-3 mx-3" />
        </div> */}
        {/* <div className="footer-navbar">
          <ul className="w-100 d-flex justify-content-between t-16 text-white font-BoldenVan">
            <li>
              <span>HOME</span>
            </li>
            <li>
              <span>Gamplay</span>
            </li>
            <li>
              <span>Paper</span>
            </li>
            <li>
              <span>Road map</span>
            </li>
            <li>
              <span>NFT item</span>
            </li>
            <li>
              <span>Market</span>
            </li>
            <li>
              <span>DApp</span>
            </li>
            <li>
              <span>Invite</span>
            </li>
            <li>
              <span>Play</span>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
