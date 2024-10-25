// deploy.js
const { ethers } = require("hardhat");

async function main() {
    // Loading a contract
    const ChatApp = await ethers.getContractFactory("ChatApp");

    // Contract implementation
    const chatApp = await ChatApp.deploy();

    //Waiting for the deployment to complete
    await chatApp.waitForDeployment(); 

    // Displaying the contract address
    console.log("ChatApp deployed to:", chatApp.target); 
}

// run contract
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
