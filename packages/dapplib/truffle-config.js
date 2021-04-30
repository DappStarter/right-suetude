require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe strong rival noise modify good civil army giggle'; 
let testAccounts = [
"0x1ac3668b167c184fc0e009bc3f7d645bccbf36f91ed169161201b13c2fae1462",
"0x131946596d781b1a0f27c90f2147b720f21221357ce7f32e93bd7dd8480c577b",
"0x1835fec984d7347f66d9bc11c3dcac69e0fe32cfc539073f88b3e1ba61f2d402",
"0xf3b366dc809b94b55ed359c2810719d018236e9d1bcfbde695a7d7294b19beaa",
"0x08c1d0b0b0f98fd16772b3fcf83a78ae68d3feb6d4cbb73f02b3633a53ed2d8c",
"0x2815f371f9b7eb1ffec3c716d4791e1f7ca4aa6a79d303925a757cd11abd67b6",
"0x9e4874fcd3b6f9d65e0f95060ab13bf3b04f16e46b644786172424bbbf966382",
"0xd718604212471d56f734c059d2e5399fbd31744752f6c6955a14a1661881385b",
"0x18c06019a3c39fab63800085de5dd0112bdf4d53d8e1270a09fe413e4c4393bf",
"0x206c26d13e74c9ecb01edaa2a1b04bb03ca7e9e8a4d10dcc04459ed055e4feae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
