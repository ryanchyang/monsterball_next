import Image from "next/image";
import { SiTarget } from "react-icons/si";
import monster1 from "@/images/home/roadmap_monster_01.png";
import monster2 from "@/images/home/roadmap_monster_02.png";
import monsterBg from "@/images/home/roadmap.png";
const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap-area">
      {/* <div className="roadmap-monster01-img">
        <Image src={monster1} alt="roadmap-monster" />
      </div>
      <div className="roadmap-monster02-img">
        <Image src={monster2} alt="roadmap-monster" />
      </div> */}
      <h2 className="text-center t-96">Roadmap</h2>
      <div className="roadmap-monster-bg">
        <div>
          <Image
            src={monsterBg}
            alt="monster background"
            layout="responsive"
            quality={100}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
        {/* Q4/2021 */}
        {/* <div className="roadmap-text-block">
          <div className="mt-5">
            <div className="roadmap-target-icon">
              <SiTarget />
            </div>
            <h className="roadmap-quarter-tag roadmap-quarter-tag-1">
              Q4/2021
            </h>
          </div>
          <div className="roadmap-text-content roadmap-text-content-1">
            <p>
              16/11/2021: Launching <br />
              Announcement
            </p>
            <p>
              END OF 11/2021: IDO Launching
              <br />
              Pancakeswap listing
            </p>
            <p>
              12/2021: Alpha Test
              <br />
              MFB Marketplace Launching, MFB Listing, NFT Staking to Earn MFB
            </p>
          </div>
        </div> */}
        {/* Q1/2022 */}
        {/* <div className="roadmap-text-block">
          <h4 className="mt-lg-5">
            <div className="roadmap-target-icon">
              <SiTarget />
            </div>
            <span className="roadmap-quarter-tag roadmap-quarter-tag-2">
              Q1/2022
            </span>
          </h4>
          <div className="roadmap-text-content roadmap-text-content-2">
            <p>
              EARLY Q1/2022: BETA TEST
              <br />
              MID Q1/2022: Play-to-Earn, PvP, and Co-op mode release
            </p>
          </div>
        </div> */}
        {/* Q2/2022 */}
        {/* <div className="roadmap-text-block">
          <h4 className="mt-lg-5">
            <div className="roadmap-target-icon">
              <SiTarget />
            </div>
            <span className="roadmap-quarter-tag roadmap-quarter-tag-3">
              Q2/2022
            </span>
          </h4>
          <div className="roadmap-text-content roadmap-text-content-3">
            <p>
              WARLORD &amp; COMMANDER SYSTEM
              <br />
              Battlefield version release: Challenge &amp; Tournament
            </p>
          </div>
        </div> */}
        {/* Q3/2022 */}
        {/* <div className="roadmap-text-block">
          <h4 className="mt-lg-5">
            <div className="roadmap-target-icon">
              <SiTarget />
            </div>
            <span className="roadmap-quarter-tag roadmap-quarter-tag-4">
              Q3/2022
            </span>
          </h4>
          <div className="roadmap-text-content roadmap-text-content-4">
            <p>
              START STAKING REWARD
              <br />
              Release World championship, tournament
            </p>
          </div>
        </div> */}
        {/* Q4/2022 */}
        {/* <div className="roadmap-text-block">
          <h4 className="mt-lg-5">
            <div className="roadmap-target-icon">
              <SiTarget />
            </div>
            <span className="roadmap-quarter-tag roadmap-quarter-tag-5">
              Q4/2022
            </span>
          </h4>
          <div className="roadmap-text-content roadmap-text-content-5">
            <p>
              World eSport offline event
              <br />
              Gratitude gift giveaway
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Roadmap;
