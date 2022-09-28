import BlindBox from 'components/Market/BlindBox/BlindBox';
import Navbar2 from 'components/Navbar2';

const BlindBoxPage = () => {
  return (
    <>
      <BlindBox />
    </>
  );
};

BlindBoxPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar2 />
      <main>{page}</main>
    </>
  );
};

export default BlindBoxPage;
