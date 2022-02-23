
  //const GardenERC20 = await hre.ethers.getContractFactory("GardenERC20");
  //const NOMIswapStrategyForLPnmx = await hre.ethers.getContractFactory("NOMIswapStrategyForLPnmx");
  const PancakeStrategyForLP = artifacts.require("PancakeStrategyForLP");
  const BIswapStrategyForLP = artifacts.require("BIswapStrategyForLP");
  const ApeStrategyForLP = artifacts.require("ApeStrategyForLP");
  const ShibaStrategyForLP = artifacts.require("ShibaStrategyForLPshiba");
  const RewardToken = "0xB80C487A27B02a7420DB7202CB6C2e8C4d57f03d";
  
  const DepositToken = "0xFC2f569dA6F4eAbfD2Fb9445Aec411E2e1171A94";
  const DepositToken1 = "0x9D0Ca5044F128A8c0E3fE2443DAE4a2225FDB7Ff";
  const Router = "0x15E14A543a4690284368977Da9cA66BC37e39ff3";
  const ME = "0x43AD662e8d76EEAd2Bcfa62234ebAe40a6e50B0d";
  const MasterChef = "0xBA4FB7eE96acDA00338a9f60e57Fc70bC09F6a5E";
  const MasterChefBIswap = "0x30B486bE43d9f1427aE1a0a91D19f1f197dA6564";
  const MasterApe = "0x5dBcf161f86fadc08E3dC8C20AFD27616A5c0Aa4";
  const BuryShib = "0x423F9E15A2cB4391279781ab780922019988d921";

module.exports = async function (deployer) {
 //await  deployer.deploy(Migrations);
 await deployer.deploy(PancakeStrategyForLP,DepositToken1,RewardToken,MasterChef,Router,0);
 await deployer.deploy(NOMIswapStrategyForLPnmx, DepositToken,GardenERC20.address,MasterChef1.address,Router,0);
  await deployer.deploy(BIswapStrategyForLP,DepositToken,RewardToken,MasterChefBIswap,Router,0);
  await deployer.deploy(ApeStrategyForLP,DepositToken,RewardToken,MasterApe,Router,0);
  await deployer.deploy(ShibaStrategyForLP,DepositToken,RewardToken,BuryShib,Router,0);


  await PancakeStrategyForLP.deployed();
  await nOMIswapStrategyForLPnmx.deployed();
  await BIswapStrategyForLP.deployed();
  await ApeStrategyForLP.deployed();

  await GardenERC20.deployed();

  console.log(PancakeStrategyForLP.address);
  console.log(NOMIswapStrategyForLPnmx.address);
  console.log(BIswapStrategyForLP.address);
  console.log(ApeStrategyForLP.address);
  console.log(ShibaStrategyForLP.address);

};
