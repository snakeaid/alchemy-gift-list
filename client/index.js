const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const name = 'Anna Stehr';
  const merkleTree = new MerkleTree(niceList);

  const index = niceList.indexOf(name);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof: merkleTree.getProof(index),
    name: name
  });

  console.log({ gift });
}

main();