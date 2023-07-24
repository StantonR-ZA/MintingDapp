import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TheTokoloshe',
  tokenName: 'The Tokoloshe',
  tokenSymbol: 'TOKO',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 5000,
  whitelistSale: {
    price: 0.00666,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.00999,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x7f02000a02eF431307E128f98D82897fcF29391A',
  marketplaceIdentifier: 'the-tokoloshe',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
