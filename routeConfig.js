// 前端 API 路徑
const host = 'https://test.monsterball.me/gateway/app';
const front = 'http://localhost:3000';

const config = {
  // AUTH
  LOG_IN: `${host}/user/login`,

  // GET NONCE
  NONCE: `${host}/nonce`,

  // FRONT-END
  FRONT_END: `${front}`,
};

export default config;
