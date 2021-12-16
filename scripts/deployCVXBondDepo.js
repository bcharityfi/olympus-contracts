const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);

    const OGV = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const CVX = "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b";
    const Treasury = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
    const DAO = "0x245cc372C84B3645Bf0Ffe6538620B04a217988B";

    const policy = "0x0cf30dc0d48604A301dF8010cdc028C055336b2E"

    // Get contract factory for CVX bond
    const CVXBond = await ethers.getContractFactory('OlygiveCVXBondDepository');

    // Deploy CVX bond
    const cvxBond = await CVXBond.deploy(OGV, CVX, Treasury, DAO);

    await cvxBond.pushManagement(policy);

    console.log("Bond: " + cvxBond.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})