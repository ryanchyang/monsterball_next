import Image from 'next/image';
import MonsterCard1 from '@/images/home/home_banner_01.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
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
        <h3 className="mt-3">ANNOUNCEMENTS</h3>
        <p className="text-white">New monsters are coming !!!</p>
        <p className="text-white">Apr 11 - 3</p>
      </div>
      <div>
        <FaDiscord className="text-dark t-24 my-3 mx-3 ms-0" />
        <AiOutlineTwitter className="text-dark t-24 my-3 mx-3" />
        <FaTelegramPlane className="text-dark t-24 my-3 mx-3" />
      </div>
    </m.div>
  );
};

export default WhatsnewCard;
