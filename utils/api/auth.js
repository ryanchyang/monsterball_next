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
// {
//     code: 'G_0001',
//     message: 'VALID_ERROR',
//     data: 'verifyThirdPartyToken.thirdPartyToken: must not be blank'
//   }