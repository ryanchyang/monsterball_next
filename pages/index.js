import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from 'components/Home/Banner';
import AddressGroup from 'components/Home/AddressGroup';
import IntroVideo from 'components/Home/IntroVideo';
import Whatsnew from 'components/Home/Whatsnew/Whatsnew';
import PlayNow from 'components/Home/PlayNow';
import Roadmap from 'components/Home/Roadmap';
import ToMarket from 'components/Home/ToMarket';
import NftItem from 'components/Home/NftItem';
import Team from 'components/Home/Team';
import Partner from 'components/Home/Partner';
import Technology from 'components/Home/Technology';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';
import { NextSeo } from 'next-seo';

export default function Home() {
  const currentWidth = useCurrentWidth();

  return (
    <>
      <NextSeo
        title="Monster Football"
        description="Welcome to Monster Football"
      />
      <Banner />
      <AddressGroup currentWidth={currentWidth} />
      {currentWidth > Number(process.env.NEXT_PUBLIC_LG_WIDTH) && (
        <IntroVideo />
      )}
      <Whatsnew />
      <PlayNow />
      <Roadmap />
      <ToMarket />
      <NftItem />
      <Team />
      <Partner />
      <Technology />
    </>
  );
}
