require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'});
require('hardhat-deploy');


// Prints the Celo accounts associated with the mnemonic in .env
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    // localhost: {
    //   url: "http://127.0.0.1:7545"
    // },

  },
  solidity: "0.8.4",
};