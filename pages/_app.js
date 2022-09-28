import '../styles/globals.scss';
import '../styles/Navbar.scss';
import '../styles/SideNavbar.scss';
import '../styles/Footer.scss';
import '../styles/Banner.scss';
import '../styles/AddressGroup.scss';
import '../styles/IntroVideo.scss';
import '../styles/Whatsnew.scss';
import '../styles/PlayNow.scss';
import '../styles/Roadmap.scss';
import '../styles/ToMarket.scss';
import '../styles/NftItem.scss';
import '../styles/Team.scss';
import '../styles/Partner.scss';
import '../styles/Technology.scss';
import '../styles/Modal.scss';
import '../styles/MarketPlaceContent.scss';
import '../styles/MarketSideBar.scss';
import '../styles/BlindBox.scss';
import Navbar from 'components/Navbar';
import Footer from '/components/Footer';
import { WagmiConfig, createClient } from 'wagmi';
import { connectors, provider } from 'utils/constants/connectors';

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <>
        <WagmiConfig client={client}>
          {Component.getLayout(<Component {...pageProps} />)}
        </WagmiConfig>
      </>
    );
  }
  return (
    <>
      <WagmiConfig client={client}>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </WagmiConfig>
    </>
  );
}

export default MyApp;
