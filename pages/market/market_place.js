import MarketPlaceContent from 'components/Market/MarketPlace/MarketPlaceContent';
import MarketSideBar from 'components/Market/MarketPlace/MarketSideBar';
import Navbar2 from 'components/Navbar2';

const MarketPlace = () => {
  return (
    <div className="market-place-container">
      <MarketPlaceContent />
      <MarketSideBar />
    </div>
  );
};

MarketPlace.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar2 />
      <main>{page}</main>
    </>
  );
};

export default MarketPlace;
