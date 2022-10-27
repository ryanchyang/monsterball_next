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
import { SessionProvider } from 'next-auth/react';
import { WagmiConfig, createClient } from 'wagmi';
import { connectors, provider } from 'utils/constants/connectors';
import Script from 'next/script';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="https://widgets.rubic.exchange/iframe/bundle.min.js"
          defer
        ></script>
      </Head> */}
      <DefaultSeo
        title="Monster Football"
        description="Welcome to Monster Football"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'Monster Football',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <SessionProvider session={session}>
        <WagmiConfig client={client}>
          {Component.getLayout ? (
            <>{Component.getLayout(<Component {...pageProps} />)}</>
          ) : (
            <>
              <Navbar />
              <main>
                <Component {...pageProps} />
              </main>
              <Footer />
            </>
          )}
        </WagmiConfig>
      </SessionProvider>
    </>
  );
}

export default MyApp;
