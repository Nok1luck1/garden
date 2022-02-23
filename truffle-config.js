/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const infuraKey = "e89409e969284d3098b9a84cdbbe3d38";
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "5777", 
     gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
     gasPrice: 200000000      // Any network (default: none)
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
    provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/39bf211ec4024c1ab7951c072b81d833`),
    network_id: 4,       // Rinkeby's id
    production: false,
    // gas:      10000000, 
    // gasPrice: 4000000000       // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: ()=> new HDWalletProvider(mnemonic,'https://kovan.infura.io/v3/39bf211ec4024c1ab7951c072b81d833'),
      network_id: 6,
      production: false,
    },
    avalanceFuji:{
      provider:()=> new HDWalletProvider(mnemonic,'https://api.avax-test.network/ext/bc/C/rpc'),
      network_id: 43113,
      production: false,
    },
    mumbaimatic:{
      provider:()=> new HDWalletProvider(mnemonic,'https://rpc-mumbai.maticvigil.com'),
      network_id:80001,
      prodution:false,
    },
    velastestnet:{
      provider:()=> new HDWalletProvider(mnemonic,'https://evmexplorer.testnet.velas.com/rpc'),
      network_id:111,
      prodution:false,
    },
    fantomtest:{
      provider:()=> new HDWalletProvider(mnemonic,'https://rpc.testnet.fantom.network/'),
      network_id: 4002,
      prodution:false,
    },

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/39bf211ec4024c1ab7951c072b81d833`),
      network_id: 3,       // Ropsten's id
      production: false,
      // gas:      10000000, 
      // gasPrice: 4000000000       // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
    // Useful for private networks
     bsctestnet: {
    provider: () => new HDWalletProvider (mnemonic, ` https://data-seed-prebsc-1-s2.binance.org:8545/`),
    network_id: 97, 
    // gasPrice: 30000000000,  // This network is yours, in the cloud.
    production: false    // Treats this network as if it was a public net. (default: false)
     }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      
      version: "0.7.3",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "istanbul"
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    
    etherscan: 'H976DUPQP2KFCFB84ZTTC2GW6RHIHEEWRK',
    bscscan: 'WES9KS3YFTT6VZU92TRA3TIK3GBZI3E1U2',
    ftmscan: 'GW6QZKHE1NMBJF25YJBJCPUA1RMJA2DQNS',
    snowtrace:'1KVXGRF1KI292HTYBQGGA5UB3UXGV29HI5'
  },
  //binance:"WES9KS3YFTT6VZU92TRA3TIK3GBZI3E1U2"
  //fantom :"GW6QZKHE1NMBJF25YJBJCPUA1RMJA2DQNS"
 // matic: "YNW28KKR9B2IZ62ARK2SEIW2D41ZMWJD5R"
  //avalanceFuji :'1KVXGRF1KI292HTYBQGGA5UB3UXGV29HI5'
  // etherscan: 'J2UNT7PXBKYBD5HB4CPZSMF6IZPWW4HXS9'
  // etherscan:'FPDSV66PNXCPXGCXI48VEB164TFJIPZ6GX'
  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  // truffle run verify --network ropsten WyvernProxyRegistry@0xA67854B2bC7F0bb6a27CF911Ed5517D8F394Aed6
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
