import { useState } from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
} from 'wagmi';
import useDebounce from '../../../utils/hooks/useDebounce';
import { blindBoxAbi } from './blindBoxAbi';

const testContractAddress = '0x8FDd6dF58D54293af282E13dEDBF90Da2522F2E4';
const blindBoxAddress2 = '0xfcE936253D3930d69446ddd4839808a6E4E01c31';

const BlindBox = () => {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: blindBoxAddress2,
    contractInterface: blindBoxAbi,
    functionName: 'calPrice',
  });

  console.log(data);
  const [amount, setAmount] = useState('');
  // const debouncedTokenId = useDebounce(amount, 500);
  // const { config, error } = usePrepareContractWrite({
  //   addressOrName: blindBoxAddress, // contract address
  //   contractInterface: blindBoxAbi,
  //   functionName: 'safeMint',
  //   args: [parseInt(debouncedTokenId)],
  //   enabled: Boolean(debouncedTokenId),
  // });
  // console.log({ config, error });
  // const { data, write } = useContractWrite(config);
  // console.log(data);
  // const { isLoading, isSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // });

  return (
    <div className="blind-box-area">
      <h2>BlindBox</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          // write?.();
        }}
      >
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          onChange={e => setAmount(e.target.value)}
          placeholder="0"
          value={amount}
        />
        {/* <button disabled={!write}>Mint</button> */}
      </form>
    </div>
  );
};

export default BlindBox;
