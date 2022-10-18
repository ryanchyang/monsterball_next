// 前端 API 路徑
const host = 'http://localhost:3001';
const front = 'http://localhost:3000';

const config = {
  //會員
  MEMBER_REGISTER: `${host}/member/register`,
  MEMBER_LOGIN: `${host}/member/login`,
  MEMBER_LOGIN_CODE: `${host}/member/login-code`,
  MEMBER_RESET_PWD: `${host}/member/update-pwd`,
  MEMBER_DATA: `${host}/member`,
  MEMBER_ADDRESS: `${host}/member/address`,
  MEMBER_AVATAR: `${host}/member/avatar`,
  MEMBER_NICKNAME: `${host}/member/nickname`,
  MEMBER_ORDER_BUY: `${host}/member/order/buy`,
  MEMBER_ORDER_SELL: `${host}/member/order/sell`,
  MEMBER_ORDER_HISTORY: `${host}/member/order/history`,
  MEMBER_TRANSFER: `${host}/member/transfer`,
  MEMBER_FEEDBACK: `${host}/member/feedback`,
  MEMBER_CODE: `${host}/member/code`,
  MEMBER_RESEND: `${host}/member/resend`,
  MEMBER_SHIPPED: `${host}/member/confirm-ship`,
  MEMBER_RECEIVED: `${host}/member/confirm-receipt`,
  MEMBER_PAY_PWD: `${host}/member/pay-pwd`,
  MEMBER_CREDIT_CARD: `${host}/member/credit-card`,
  MEMBER_CREDIT_CARD_CODE: `${host}/member/credit-card/code`,
  MEMBER_CREDIT_CARD_DEPOSIT: `${host}/member/store-value`,
  MEMBER_CREDIT_CARD_WITHDRAWAL: `${host}/member/withdraw-value`,
  MEMBER_FREEZE_MONEY: `${host}/member/freeze-money`,
  //個人中心
  MEMBER_FOLLOWED: `${host}/member/followed`,
  MEMBER_UNAUTH: `${host}/member/unauth`,
  MEMBER_MY_OWNER: `${host}/member/my/owner`,
  MEMBER_MY_SELL: `${host}/member/my/sell`,
  MEMBER_MY_BID: `${host}/member/my/bid`,
  MEMBER_PIC: `${host}/img/member`,
  //商品
  COMMODITY_ALL: `${host}/commodity`,
  COMMODITY_SELL: `${host}/commodity/sell`,
  COMMODITY_BID: `${host}/commodity/bidding`,
  COMMODITY_ID: `${host}/commodity/byid/`,
  COMMODITY_BUY: `${host}/commodity/buy`,
  COMMODITY_SET_BID: `${host}/commodity/bid`,
  //商品收藏
  COMMODITY_LIKE: `${host}/commodity/liked`,
  COMMODITY_FOLLOW: `${host}/commodity/follow`,
  COMMODITY_LIKE_POST: `${host}/commodity/liked/`,
  COMMODITY_FOLLOW_POST: `${host}/commodity/follow/`,
  //圖片
  COMMODITY_PIC: `${host}/img/commodity`,
  //商品搜尋
  COMMODITY_SEARCH: `${host}/commodity/filter`,
  COMMODITY_BIDDING: `${host}/commodity/bidding-filter/`,
  COMMODITY_SELLSREACH: `${host}/commodity/sell-filter/`,
  // 商品
  COMMODITY: `${host}/commodity`,
  COMMODITY_HOT: `${host}/commodity/hot`,
  //商品上下架
  COMMODITY_TO_SALE: `${host}/commodity/to-sale`,
  COMMODITY_UN_SALE: `${host}/commodity/un-sale`,
  // 商店
  STORE: `${host}/commodity/shop-data`,

  // CAPTCHA
  CAPTCHA: `${host}/captcha`,

  // BULLETIN
  BULLETIN: `${host}/bulletin`,

  // PLATFORM
  PLATFORM: `${host}/platform`,
  PLATFORM_PIC: `${host}/img/platform/`,
  //NEWS
  NEWS: `${host}/bulletin/home-img`,
  NEWSPIC: `${host}/img/bulletin/`,
  //帳單明細
  BILL: `${host}/member/bill`,
  BILL_PIC: `${host}/img/member/bill`,
  BILL_TOTAL: `${host}/member/bill-total`,

  // 聊天室
  CHAT_ROOM: `${host}/member/chat`,
  CHAT_ROOM_LIST: `${host}/member/chat-list`,
  CHAT_ROOM_RECORD: `${host}/member/chat-record`,

  // GET NONCE
  NONCE: `${host}/nonce`,

  // FRONT-END
  FRONT_END: `${front}`,
};

export default config;
