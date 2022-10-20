import Account from 'components/Account/Account';
import Navbar from 'components/Navbar';
const AccountPage = () => {
  return (
    <>
      <Account />
    </>
  );
};

AccountPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <main>{page}</main>
    </>
  );
};

export default AccountPage;
