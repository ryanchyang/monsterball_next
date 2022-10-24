import { default as config } from 'routeConfig';
import axios from 'axios';

export const getNonce = async (id_token, address) => {
  try {
    const response = await axios.get(`${config.NONCE}?address=${address}`, {
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getQuote = async (fromToken, toToken, value) => {
  try {
    // const response = await axios.get(
    //  `https://goerli.api.0x.org/swap/v1/quote?buyToken=0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6&sellToken=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&sellAmount=10000000000`
    // );
    // const response = await axios.get(
    //   `https://api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WETH&sellAmount=100000000000000000`
    // );

    const response = await axios.get(
      'https://open-api.openocean.finance/v3/bsc/quote',
      {
        params: {
          chain: 'bsc',
          inTokenAddress: fromToken,
          outTokenAddress: toToken,
          amount: value,
          gasPrice: 5,
          slippage: 1,
        },
      }
    );

    return response.data.data;
  } catch (err) {
    return err;
  }
};

export const getSwap = async (fromToken, toToken, value, address) => {
  try {
    if (!address) return;
    const response = await axios.get(
      'https://open-api.openocean.finance/v3/bsc/swap_quote',
      {
        params: {
          chain: 'bsc',
          inTokenAddress: fromToken,
          outTokenAddress: toToken,
          amount: value,
          gasPrice: 5,
          slippage: 1,
          account: address,
        },
      }
    );

    return response.data.data;
  } catch (err) {
    return err;
  }
};
