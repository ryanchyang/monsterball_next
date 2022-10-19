import Navbar from 'components/Navbar';
import SubNavbar from 'components/Dapp/SubNavbar';
import Swap from 'components/Dapp/Swap';
import Retail from 'components/Dapp/Retail';
import Script from 'next/script';

const SwapPage = () => {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 30px)',
        backgroundColor: '#242735',
      }}
    >
      <Retail />
      <Swap />
    </div>
  );
};
export default SwapPage;

SwapPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <main>{page}</main>
    </>
  );
};
