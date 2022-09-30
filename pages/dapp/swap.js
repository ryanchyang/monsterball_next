import Navbar from 'components/Navbar';
import SubNavbar from 'components/Dapp/SubNavbar';
import Swap from 'components/Dapp/Swap';

const SwapPage = () => {
  return (
    <>
      <Swap />
    </>
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
