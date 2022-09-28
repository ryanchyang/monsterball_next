import { useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhatsnewCard from './components/WhatsnewCard';
import { fadeInFromLeft, flipVariants } from 'utils/constants/framerConstant';

const Whatsnew = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="whatsnew-area">
      <div className="d-flex justify-content-between align-items-baseline font-BoldenVan mx-lg-5">
        <m.h2 variants={fadeInFromLeft} initial="hidden" animate={controls}>
          {`WHAT'S NEW`}
        </m.h2>
        <span className="t-16 color-light-green cursor-pointer text-nowrap">{`READ MORE >`}</span>
      </div>
      <m.div
        variants={flipVariants}
        animate={controls}
        className="mt-4 d-flex flex-column flex-lg-row justify-content-lg-between"
      >
        <WhatsnewCard />
        <WhatsnewCard />
        <WhatsnewCard />
      </m.div>
    </section>
  );
};

export default Whatsnew;
