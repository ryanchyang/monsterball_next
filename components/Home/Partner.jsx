import Image from 'next/image';
import partner1 from '@/images/home/investors/home_partner_01.png';
import partner2 from '@/images/home/investors/home_partner_02.png';
import partner3 from '@/images/home/investors/home_partner_03.png';
import partner4 from '@/images/home/investors/home_partner_04.png';
import partner5 from '@/images/home/investors/home_partner_05.png';
import partner6 from '@/images/home/investors/home_partner_06.png';
import partner7 from '@/images/home/investors/home_partner_07.png';
import partner8 from '@/images/home/investors/home_partner_08.png';
import partner9 from '@/images/home/investors/home_partner_09.png';
import partner10 from '@/images/home/investors/home_partner_10.png';
import partner11 from '@/images/home/investors/home_partner_11.png';
import partner12 from '@/images/home/investors/home_partner_12.png';
import partner13 from '@/images/home/investors/home_partner_13.png';
import partner14 from '@/images/home/investors/home_partner_14.png';

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
      <h2 className="text-center mb-5">Investors and Partners</h2>
      <div className="partner-grid">
        {Array.from({ length: 13 }).map((_, i) => (
          <div key={i} className="partner-img">
            <Image src={partners[`partner${i + 1}`]} alt="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
