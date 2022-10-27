import Shop from 'components/Shop/Shop';
import Navbar from 'components/Navbar';
const ShopPage = () => {
  return (
    <>
      <Shop />
    </>
  );
};

ShopPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <main>{page}</main>
    </>
  );
};

export default ShopPage;
