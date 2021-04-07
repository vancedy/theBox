require("@nomiclabs/hardhat-waffle");

const BINANCE_TEST_PK = "";
const BINANCE_PK = ""; 

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    binancesmartchaintest: {
      url: '',
      accounts: ['']
    }
    binancesmartchain: {
      url: '',
      accounts: ['']
    }

  }
};
