async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const CrowdfundingContract = await ethers.getContractFactory("CrowdFunding");
    const crowdfundingContract = await CrowdfundingContract.deploy();
  
    console.log("CrowdFunding contract deployed to:", crowdfundingContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  