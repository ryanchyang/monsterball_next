// 前端 API 路徑
const host = 'https://test.monsterball.me/gateway/app';
const front = 'http://localhost:3000';
// const front = 'https://strong-kleicha-01c85e.netlify.app/';

const config = {
  // AUTH
  LOG_IN: `${host}/user/login`,
  CHECK_BIND: `${host}/user/checkWalletExist`,

  // GET NONCE
  NONCE: `${host}/user/nonce`,
  // BIND WALLET
  BIND_WALLET: `${host}/user/bindWallet`,
  // USER INFO
  USER_INFO: `${host}/user/userInfo`,
  // MY_MONSTER
  USER_MONSTER: `${host}/user/myMonster`,
  // CHARGE_MFB
  CHARGE_MFB_ADDRESS: `${host}/deposit/info`,

  // FRONT-END
  FRONT_END: `${front}`,
};

export default config;
