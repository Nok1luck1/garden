require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require('hardhat-abi-exporter');
require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();


const  PRIVATE_KEY  = process.env.PRIVATE_KEY;

const verifyContract = require("./scripts/verify-contract");

task("verifyContract", "Verifies the contract in the snowtrace")
.addParam("deploymentFilePath", "Deployment file path")
.setAction(
  async({deploymentFilePath}, hre) => verifyContract(deploymentFilePath, hre)
)

module.exports = {
  defaultNetwork: 'ropsten',
  networks:{
    ropsten:{
      url:'https://ropsten.infura.io/v3/39bf211ec4024c1ab7951c072b81d833',
      chainId:3,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    rinkeby:{
      url:'https://rinkeby.infura.io/v3/39bf211ec4024c1ab7951c072b81d833',
      chainId:3,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    Avaxfuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    moonrivermain:{
      url:'https://rpc.moonriver.moonbeam.network',
      chainId:1285,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    moonbeamtest:{
      url:'https://rpc.testnet.moonbeam.network',
      chainId:1287,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
   solidity: {
    compilers:[
      {
        version: '0.6.12',
      },
      {
        version: '0.7.3',
      },
      

    
    ],
    etherscan:{
      mainnet: "H976DUPQP2KFCFB84ZTTC2GW6RHIHEEWRK",
      ropsten: "H976DUPQP2KFCFB84ZTTC2GW6RHIHEEWRK",
      rinkeby: "H976DUPQP2KFCFB84ZTTC2GW6RHIHEEWRK",
      goerli: "H976DUPQP2KFCFB84ZTTC2GW6RHIHEEWRK",
      kovan: "H976DUPQP2KFCFB84ZTTC2GW6RHIHEEWRK",
      bsc: "WES9KS3YFTT6VZU92TRA3TIK3GBZI3E1U2",
      bscTestnet: "WES9KS3YFTT6VZU92TRA3TIK3GBZI3E1U2",
      heco: "6TJU13WA357W1YFIQI3S9HM2GVF1E7WZEI",
      hecoTestnet: "6TJU13WA357W1YFIQI3S9HM2GVF1E7WZEI",
      opera: "GW6QZKHE1NMBJF25YJBJCPUA1RMJA2DQNS",
      ftmTestnet: "GW6QZKHE1NMBJF25YJBJCPUA1RMJA2DQNS",
      optimisticEthereum: "KW65HGUSMTTVR8NDX9FJ986JTWC2HUY4UV",
      optimisticKovan: "KW65HGUSMTTVR8NDX9FJ986JTWC2HUY4UV",
      polygon: "YNW28KKR9B2IZ62ARK2SEIW2D41ZMWJD5R",
      polygonMumbai: "YNW28KKR9B2IZ62ARK2SEIW2D41ZMWJD5R",
      arbitrumOne: "NRFSTYK86TXES95DKF731NKWR3JNTTHS7K",
      arbitrumTestnet: "NRFSTYK86TXES95DKF731NKWR3JNTTHS7K",
      avalanche: "1KVXGRF1KI292HTYBQGGA5UB3UXGV29HI5",
      avalancheFujiTestnet: "1KVXGRF1KI292HTYBQGGA5UB3UXGV29HI5",
      moonriver: "U9VSKKU8STYVITYCFMP225JYXJPW9Q8453",
      moonbaseAlpha: "U9VSKKU8STYVITYCFMP225JYXJPW9Q8453S",
      xdai: "api-key",
      sokol: "api-key",
},

    
    
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  typechain: {
    outDir: './typechain',
    target: 'truffle-v5',
  },
  
};
