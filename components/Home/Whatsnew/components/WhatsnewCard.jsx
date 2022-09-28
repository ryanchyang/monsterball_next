import Image from 'next/image';
import MonsterCard1 from '@/images/home/home_banner_01.png';
import { RiDiscordLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion as m } from 'framer-motion';
import { flipCardVariants } from 'utils/constants/framerConstant';

const WhatsnewCard = () => {
  return (
    <m.div variants={flipCardVariants} className="w-100 font-LufgaBold p-lg-5">
      <div className="whatsnew-card-img">
        <Image
          src={MonsterCard1}
          alt="monster-card"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="whatsnew-card-text">
        <h5 className="color-light-green">ANNOUNCEMENTS</h5>
        <p className="text-primary">New monsters are coming !!!</p>
        <p className="text-primary">Apr 11 - 3</p>
      </div>
      <div>
        <RiDiscordLine className="text-primary t-18 my-3 mx-3" />
        <AiOutlineTwitter className="text-primary t-18 my-3 mx-3" />
        <FaTelegramPlane className="text-primary t-18 my-3 mx-3" />
      </div>
    </m.div>
  );
};

export default WhatsnewCard;
