# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
For every pair what we use, we need to deploy smart contract how will stake lp tokens and rebase position.For every unique position with special reward need to rewrite logic to rebase reward token and continue stake token. 

When user send their LPtokens to us, we send him GRDR token to proof that him start deposit

after users exit from farming GRDR token burn from him balance.

To correctly use reinvest and back more same LP token we need to correctly create pair

Pancake router address MainnetBSC =  0x10ED43C718714eb63d5aA57B78B54704E256024E;
addresses  of token you can get on bscscan;

Shibaswap router address etherscan mainnet = 0x03f7724180AA6b939894B5Ca4314783B0b36b329;
Shiba Buryshib stake = 0xDbc1A13490deeF9c3C12b44FE77b503c1B061739;
shiba buryleash = 0xa57D319B3Cf3aD0E4d19770f71E63CF847263A0b;
shiba burybone = 0xf7A0383750feF5AbaCe57cc4C9ff98e3790202b3;

Apeswap Router mainnet bsc = 0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7;
Apeswwap staking mainnet bsc = 0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9;

apeswap staking mainnet polygon = 0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf;
apeswap staking mainnet polygon = 0x54aff400858Dcac39797a81894D9920f16972D1D;
https://apeswap.gitbook.io/apeswap-finance/where-dev/smart-contracts



Nomiswap staking NMX-bnb 0x5cd67d65Ff07D5BE2488E51F1a8C69273D258338 return nmx (strategy with NMX  in the end)
Nomiswap staking NMX-busd 0x857083580AeD7b5726860937EF030ED8072BC9aB
Nomiswap staking ETH-bnb 0xab2f4297E7e31638eBE8362471b3038018A106D8
Nomiswap staking BNB usdt 0x8326E22a36486ae7D4B85e8DFA732527b962805c
Nomiswap staking Busd-usdt 0x281e60407b095b956a6A5ac98EE217BEf3144928
Nomiswap staking USDC- usdt 0xd8925c88B94513be760AD88BC10D780d58fA001D
Nomiswap staking BTCB- USDT 0xA937Eddfd12930F758788BcC936B4762BDE9d54C
Nomiswap staking TRONcoin - usdc 0x5c317770bf9A7d7cC88974A97fFA92C209669bFE
Nomiswap staking sol -usdc 0x26804231a528c894AB6790530b237449a817da6A
Nomiswap staking matic -usdt 0x63A81d936cb14fA3649A4D071608758cFFb3Bd94
Nomiswap staking doge - usdt 0xA0F2C13e20A11e00acF4e7B47604b24ca8908797
Nomiswap staking shib busd  0x03868d2e45a9b579Cc68B7addd65Cf78Ddb62a68 return nmx (strategy with NMX  in the end)


With Nomiswap dont use numbers bigger than uint 128 ;



BIswap staking adresses 
masterchef for maybe all tokens 0xDbc1A13490deeF9c3C12b44FE77b503c1B061739
uint public PID;
  uint public MIN_TOKENS_TO_REINVEST = 20000;
  uint public REINVEST_REWARD_BIPS = 500;
  uint public ADMIN_FEE_BIPS = 500;
  uint constant private BIPS_DIVISOR = 10000;
  uint constant internal UINT_MAX = uint256(-1);

  to correct working function   "convertRewardTokensToDepositTokens" need to now all poolID in masterchef contract "staking"
  not only in this Dex case



