import { default as config } from 'routeConfig';
import axios from 'axios';

export const getUserInfo = async id_token => {
  try {
    const response = await axios.get(config.USER_INFO, {
      headers: { Authorization: `Bearer ${id_token}` },
    });
    return response.data.data;
  } catch (err) {
    return err;
  }
};

export const getUserMonster = async id_token => {
  try {
    const response = await axios.get(config.USER_MONSTER, {
      headers: { Authorization: `Bearer ${id_token}` },
    });
    return response.data.data;
  } catch (err) {
    return err;
  }
};
