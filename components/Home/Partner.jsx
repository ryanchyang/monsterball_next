import Image from 'next/image';
import partner1 from '@/images/home/investors/icon_Partner_1.png';
import partner2 from '@/images/home/investors/icon_Partner_2.png';
import partner3 from '@/images/home/investors/icon_Partner_3.png';
import partner4 from '@/images/home/investors/icon_Partner_4.png';
import partner5 from '@/images/home/investors/icon_Partner_5.png';
import partner6 from '@/images/home/investors/icon_Partner_6.png';
import partner7 from '@/images/home/investors/icon_Partner_7.png';
import partner8 from '@/images/home/investors/icon_Partner_8.png';
import partner9 from '@/images/home/investors/icon_Partner_9.png';
import partner10 from '@/images/home/investors/icon_Partner_10.png';
import partner11 from '@/images/home/investors/icon_Partner_11.png';
import partner12 from '@/images/home/investors/icon_Partner_12.png';
import partner13 from '@/images/home/investors/icon_Partner_13.png';
import partner14 from '@/images/home/investors/icon_Partner_14.png';

const Partner = () => {
  const partners = {
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
  };

  return (
    <section className="partner-area">
      <h2 className="text-center">
        <svg viewBox="0 0 900 115">
          <text className={'svgText--active'} x="10" y="70">
            Investors and Partner
          </text>
        </svg>
      </h2>
      <div className="partner-grid">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`partner-img pic${i}`}>
            <Image src={partners[`partner${i + 1}`]} alt="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
