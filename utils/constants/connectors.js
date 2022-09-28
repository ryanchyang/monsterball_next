import { configureChains, defaultChains } from 'wagmi';

// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
// const infuraId = process.env.INFURA_ID;
// alchemyProvider({ apiKey: 'yourAlchemyApiKey' })
// Configure chains for connectors to support

// 加入binance chain 物件
const binanceChain = {
  id: 56,
  name: 'Binance Smart Chain Mainnet',
  network: 'Binance Smart Chain Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com/' },
  },
  testnet: false,
};

const binanceTestChain = {
  id: 97,
  name: 'Binance Smart Chain Testnet',
  network: 'Binance Smart Chain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  blockExplorers: {
    default: {
      name: 'BSC Testnet Network',
      url: 'https://testnet.bscscan.com/',
    },
  },
  testnet: true,
};

export const { chains, provider } = configureChains(
  [...defaultChains, binanceChain, binanceTestChain],
  [publicProvider()]
);

// Set up connectors
export const connectors = [new MetaMaskConnector({ chains })];
