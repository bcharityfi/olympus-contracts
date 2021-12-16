require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.7.5",
  defaultNetwork: "stardust",
  networks: {
    hardhat: {
    },
    stardust: {
      url: "https://stardust.metis.io/?owner=588",
      accounts: 
          process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },
};
