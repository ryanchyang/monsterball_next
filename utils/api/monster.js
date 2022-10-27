import { default as config } from 'routeConfig';
import axios from 'axios';

export const getShopMonsters = async () => {
  try {
    const response = await axios.get(config.SHOP_MONSTER);
    console.log(response);
    return response.data.data;
  } catch (err) {
    return err;
  }
};
