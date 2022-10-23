import { default as config } from "routeConfig";
import axios from "axios";

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
    //   `https://goerli.api.0x.org/swap/v1/quote?buyToken=${"DAI"}&sellToken=${"WETH"}&sellAmount=${value}`
    // );
    const response = await axios.get(
      `https://api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WETH&sellAmount=100000000000000000`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    return err;
  }
};
