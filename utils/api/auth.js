import { default as config } from 'routeConfig';
import axios from 'axios';

export const googleLogIn = async id_token => {
  try {
    const response = await axios.post(config.LOG_IN, {
      type: 'web-google',
      account: '',
      password: '',
      thirdPartyToken: id_token,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getIfBindWallet = async (id_token, address) => {
  try {
    const response = await axios.get(
      `${config.CHECK_BIND}?address=${address}`,
      {
        headers: { Authorization: `Bearer ${id_token}` },
      }
    );
    return response.data.data;
  } catch (err) {
    return err;
  }
};

export const verifyBindWallet = async (id_token, address, signature) => {
  try {
    const response = await axios.post(
      config.BIND_WALLET,
      { address, signature },
      {
        headers: { Authorization: `Bearer ${id_token}` },
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
