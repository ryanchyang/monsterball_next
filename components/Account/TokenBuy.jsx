import { useState } from 'react';
import styles from '../../styles/Account.module.scss';
import Image from 'next/image';
import mfbImg from '@/images/coin_mfb.png';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import useDebounce from 'utils/hooks/useDebounce';
import { tokenAbi } from 'utils/constants/tokenAbi';
import { BigNumber, ethers } from 'ethers';

const TokenBuy = props => {
  const { systemAddress, userInfo } = props;

  const [amount, setAmount] = useState('');
  const debounceValue = useDebounce(amount, 500);

  /* web3 start */
  const { config } = usePrepareContractWrite({
    addressOrName: '0xd90e7Fd2b2DD1C84E45ae921854E0BD0Cb2F4918', // mfb address
    contractInterface: tokenAbi,
    functionName: 'transfer',
    args: [
      systemAddress?.address,
      ethers.utils.parseUnits(debounceValue || '0', 18),
    ],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  /* web3 end */
  /* handler start */
  // const chargeHandler = () => {};
  /* handler end */
  return (
    <>
      <div className={`${styles['token-buy']} col-md-6 col m-auto d-flex`}>
        <div className="me-4">
          <Image src={mfbImg} alt="" width={250} height={250} />
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <div className="mb-3">
            <h3>Current system MFB : ${userInfo?.mfb}</h3>
            <p className="text-white font-LufgaBold">
              {systemAddress?.chain}
              {systemAddress?.address}
            </p>
          </div>
          <div>
            <div className="d-flex mb-5">
              <input
                type="text"
                className={styles['input']}
                value={amount}
                placeholder="0"
                onChange={e => setAmount(e.target.value)}
              />
              <button
                className={styles['btn']}
                onClick={write}
                disabled={!write || !systemAddress || !amount}
              >
                Charge
              </button>
            </div>
            <div className="d-flex">
              <input type="text" className={styles['input']} />
              <button className={styles['btn']}>Withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenBuy;
