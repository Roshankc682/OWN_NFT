const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const RosnNFT = await hre.ethers.getContractFactory("RosnNFT");
  const Rosn = await RosnNFT.deploy();

  await Rosn.deployed();

  console.log("RosnNFT deployed to:", Rosn.address);
  let txn = await Rosn.mintNFT();
  await txn.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });