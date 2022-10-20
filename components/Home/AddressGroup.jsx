import { shortenAddress } from '../../utils/helpers/shortenAddress';

const AddressGroup = props => {
  const { currentWidth } = props;
  return (
    <section className="p-3 address-group-area">
      <div className="d-flex flex-column justify-content-evenly flex-lg-row p-lg-3">
        <div>
          <span className="mfb-address font-LufgaBold d-flex justify-content-center  text-white">
            MFB Contract：
            {currentWidth > Number(process.env.NEXT_PUBLIC_LG_WIDTH)
              ? process.env.NEXT_PUBLIC_MFB_CONTRACT
              : shortenAddress(process.env.NEXT_PUBLIC_MFB_CONTRACT)}
          </span>
        </div>
        {/* <div>
          <span className="gold-address  font-LufgaBold t-14 d-flex justify-content-center p-2 text-white">
            Gold Contract：
            {currentWidth > Number(process.env.NEXT_PUBLIC_LG_WIDTH)
              ? process.env.NEXT_PUBLIC_GOLD_CONTRACT
              : shortenAddress(process.env.NEXT_PUBLIC_GOLD_CONTRACT)}
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default AddressGroup;
