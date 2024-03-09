const MarketContract = artifacts.require("MarketContract");
const UserContract = artifacts.require("UserContract");
const EnergyDataContract = artifacts.require("EnergyDataContract");

module.exports = async function (deployer) {
  await deployer.deploy(MarketContract, UserContract.address, EnergyDataContract.address);
};
