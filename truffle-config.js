require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = { 
    contracts_build_directory: "./Thesis_Project-main/src/contracts",
    networks: {
        mumbai: {
            provider: () => new HDWalletProvider(MNEMONIC, `https://polygon-mumbai.g.alchemy.com/v2/${PROJECT_ID}`),
            network_id: 80001,
            // Mumbai testnet's id
            confirmations: 2, // # of confirmations to wait between deployments (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out (minimum/default: 50)
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets)
        },
    },
    mocha: {
        // timeout: 100000
    },
    compilers: {
        solc: {
            version: "0.8.18", // Fetch exact version from solc-bin (default: truffle's version)
                    }
    },
};