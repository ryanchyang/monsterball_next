import MarketPlaceContent from "components/Market/MarketPlace/MarketPlaceContent";
import MarketSideBar from "components/Market/MarketPlace/MarketSideBar";
import Navbar from "components/Navbar";

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
      <Navbar />
      <main>{page}</main>
    </>
  );
};

export default MarketPlace;
