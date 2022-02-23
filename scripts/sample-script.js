// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {ethers} = require('hardhat');
//const { getErrorCode } = require("hardhat/internal/core/errors-list");
//const { NomicLabsHardhatPluginError } = require("hardhat/plugins");

async function main() {
  //const GardenERC20 = await hre.ethers.getContractFactory("GardenERC20");
  //const NOMIswapStrategyForLPnmx = await hre.ethers.getContractFactory("NOMIswapStrategyForLPnmx");
  const PancakeStrategyForLP = await ethers.getContractFactory("PancakeStrategyForLP");
  const BIswapStrategyForLP = await ethers.getContractFactory("BiswapStrategyForLP");
  const ApeStrategyForLP = await ethers.getContractFactory("ApeStrategyForLP");
  const ShibaStrategyForLP = await ethers.getContractFactory("ShibaStrategyForLPshiba");
  const RewardToken = "0xB80C487A27B02a7420DB7202CB6C2e8C4d57f03d";
  const DepositToken = "0xFC2f569dA6F4eAbfD2Fb9445Aec411E2e1171A94";
  const Router = "0x15E14A543a4690284368977Da9cA66BC37e39ff3";
  const ME = "0x43AD662e8d76EEAd2Bcfa62234ebAe40a6e50B0d";
  const MasterChef = "0xBA4FB7eE96acDA00338a9f60e57Fc70bC09F6a5E";
  const MasterChefBIswap = "0x30B486bE43d9f1427aE1a0a91D19f1f197dA6564";
  const MasterApe = "0x5dBcf161f86fadc08E3dC8C20AFD27616A5c0Aa4";
  const BuryShib = "0x423F9E15A2cB4391279781ab780922019988d921";

  
   
  const pancakeStrategyForLP = PancakeStrategyForLP.deploy(DepositToken,RewardToken,MasterChef,Router,0);
  //const nOMIswapStrategyForLPnmx = await NOMIswapStrategyForLPnmx.deploy(DepositToken,GardenERC20.address,MasterChef1.address,Router,0);
  const BIswap = await BIswapStrategyForLP.deploy(DepositToken,RewardToken,'0x30B486bE43d9f1427aE1a0a91D19f1f197dA6564',Router,0);
  const apeStrategyForLP = await ApeStrategyForLP.deploy(DepositToken,RewardToken,0x5dBcf161f86fadc08E3dC8C20AFD27616A5c0Aa4,Router,0);
  const ShibaStrategyForlp = await ShibaStrategyForLP.deploy(DepositToken,RewardToken,0x423F9E15A2cB4391279781ab780922019988d921,Router);


  await pancakeStrategyForLP.deployed();
  //await nOMIswapStrategyForLPnmx.deployed();
  //await BIswapStrategyForLP.deployed();
  await apeStrategyForLP.deployed();

  await GardenERC20.deployed();

  console.log(PancakeStrategyForLP.address);
  //console.log(NOMIswapStrategyForLPnmx.address);
  //console.log(BIswapStrategyForLP.address);
  console.log(ApeStrategyForLP.address);
  console.log(ShibaStrategyForlp.address);

  //console.log(GardenERC20.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
