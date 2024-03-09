const EnergyDataContract = artifacts.require("EnergyDataContract");

module.exports = function (deployer) {
  deployer.deploy(EnergyDataContract);
};
