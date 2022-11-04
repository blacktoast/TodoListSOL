const { ethers } = require('hardhat');

async function main() {
  const contract = await ethers.getContractFactory('Todo');

  const deployedContract = await contract.deploy();

  await deployedContract.deployed();

  console.log('Todo Contract Address:', deployedContract.address);
}

main().then(() => process.exit(0));
