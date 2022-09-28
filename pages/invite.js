import InViteBanner from 'components/Invite/Banner';
import AddressGroup from 'components/Home/AddressGroup';
import InviteFriend from 'components/Invite/InviteFriend';
import useCurrentWidth from 'utils/hooks/useCurrentWidth';
import InviteOverview from 'components/Invite/Overview';

const Invite = () => {
  const currentWidth = useCurrentWidth();

  return (
    <>
      <InViteBanner />
      <AddressGroup currentWidth={currentWidth} />
      <InviteFriend />
      <InviteOverview />
    </>
  );
};

export default Invite;
