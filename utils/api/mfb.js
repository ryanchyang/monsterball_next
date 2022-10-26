import { default as config } from 'routeConfig';
import axios from 'axios';

export const getChargeMfbAddress = async id_token => {
  try {
    const response = await axios.get(config.CHARGE_MFB_ADDRESS, {
      headers: { Authorization: `Bearer ${id_token}` },
    });
    return response.data.data;
  } catch (err) {
    return err;
  }
};
