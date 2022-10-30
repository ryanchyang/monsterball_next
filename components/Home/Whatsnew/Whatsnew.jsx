import { useEffect } from "react";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhatsnewCard from "./components/WhatsnewCard";
import { fadeInFromLeft, flipVariants } from "utils/constants/framerConstant";

const Whatsnew = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="whatsnew-area">
      <div className="d-flex justify-content-center mx-lg-5 mb-5">
        <m.div variants={fadeInFromLeft} initial="hidden" animate={controls}>
          <h2 className="text-white t-96">{`What's New`}</h2>
        </m.div>
        {/* <span className="t-16 color-light-green cursor-pointer text-nowrap">{`READ MORE >`}</span> */}
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
