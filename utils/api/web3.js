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
