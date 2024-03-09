
const Web3 = require("web3");
const HDWalletProvider = require('@truffle/hdwallet-provider');

const url = "https://data-seed-prebsc-1-s1.binance.org:8545";

const privateKeys = [
  "---your privateKey---"
];

module.exports = {

  networks: {

    fuji: {
      provider: () => {
        return new HDWalletProvider({
          privateKeys: privateKeys,
          url: url,
        });
      },
      network_id: "43113",
    },
    bsctest: {
      provider: () => {
        return new HDWalletProvider({
          privateKeys: privateKeys,
          url: url,
        });
      },
      network_id: "97",
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.20",      
      optimizer: {
        enabled: true,
        runs: 200,
    },
    }
  },
};


