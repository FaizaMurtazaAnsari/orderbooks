require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
//   networks: {
//     polygon: {
//       url: "https://polygon-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", // Replace with your Alchemy API key or other Polygon provider URL
//       chainId: 137,
//       accounts:[0x93f99952f61434946858D8Cc1814Da9d91e4f9A9], // Add your private key here to sign transactions
//     },
//   },

  // paths: {
  //   artifacts: "./pages/artifacts",
  // }
};

// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.18",
// };

// export default config;
