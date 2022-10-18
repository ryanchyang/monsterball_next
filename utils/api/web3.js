import { default as config } from 'routeConfig';

export const getNonce = async () => {
  const token = localStorage.getItem('id_token');
  try {
    // const response = await axios.get(config.NONCE, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // return response.data.data;
    return 123456;
  } catch (err) {
    return err.response;
  }
};
