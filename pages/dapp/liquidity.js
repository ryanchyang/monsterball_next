import Navbar from 'components/Navbar';
import SubNavbar from 'components/Dapp/SubNavbar';
import Liquidity from 'components/Dapp/Liquidity';
import Retail from 'components/Dapp/Retail';

const LiquidityPage = () => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 30px)', backgroundColor: '#242735' }}
    >
      <Retail />
      <Liquidity />
    </div>
  );
};
export default LiquidityPage;

LiquidityPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <main>{page}</main>
    </>
  );
};
