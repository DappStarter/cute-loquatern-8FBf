require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom produce bone food shoulder reward stereo company grace nature metal gesture'; 
let testAccounts = [
"0xeb89c6b830b6b005cd3f8544a85a1878392d1da7aeccde08df440b88f5dd1b1b",
"0xb743fffb5f1c676ed4ca0fff2363dac56121597565b5c681192725ef29357e87",
"0x40735323f5daa89201cde27da0750d2b3f736ee11e5ee071d262de4d6bd87db2",
"0xad9a3be2178c7cb48da8b3c9174ba7dac7ab6995d29b97dcb375d2c5020996d7",
"0x871c965f9146f3f1729f3903fd66b29fe9e27932533f159f320819b2c67cd053",
"0x484bbc911c98f4e1e63c8819585cbedd19c87fe3a5b50d84817461f7784d0f74",
"0xdf0d59ee7d23c591587ceab733ce1e68d6bf295f5bdd75d43ca8ca59b64abdd8",
"0x1d43e9cc42c3ab3d7f4912d9e1f6767f0ef2d5c16b9e61a8c059df4203f68460",
"0xc653fe62d5800dc13fb37b3cd8e30c468d12ba0de0f8f489967f5ee86cf32131",
"0x21e72f4737fe376f9ac9b22d2e41fd986efa2eb3af69bbc26dfac223fa8a80fa"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


