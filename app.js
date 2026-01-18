// app.js
// Central Web3 + Contract handler for all dashboards
/* ---------------- BASIC CONFIG ---------------- */

export const CONTRACT_ADDRESS = "0x633F408B5CB2E9Ccd5185CB81181F5c9eC3aF7CF";

/*
  IMPORTANT:
  ABI sirf required functions ka rakha hai
  Full ABI bhi daal sakte ho, but ye enough hai
*/
export const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pricePerUnit",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "merchant",
				"type": "address"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "disasterId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderIndex",
				"type": "uint256"
			}
		],
		"name": "adminVerifyAndPay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "team",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "ngo",
				"type": "address"
			}
		],
		"name": "createDisaster",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "disasterId",
				"type": "uint256"
			}
		],
		"name": "donate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC1155InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC1155InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idsLength",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "valuesLength",
				"type": "uint256"
			}
		],
		"name": "ERC1155InvalidArrayLength",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC1155InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC1155InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC1155InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC1155MissingApprovalForAll",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "disasterId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderIndex",
				"type": "uint256"
			}
		],
		"name": "ngoVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "disasterId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "placeOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum ReliefSupplyChain.Role",
				"name": "role",
				"type": "uint8"
			}
		],
		"name": "setRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "disasterId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderIndex",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "proofHash",
				"type": "bytes32"
			}
		],
		"name": "submitDeliveryProof",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disasterCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "disasterOrders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "delivered",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "ngoVerified",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "adminVerified",
				"type": "bool"
			},
			{
				"internalType": "bytes32",
				"name": "proofHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "disasters",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "team",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "ngo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pricePerUnit",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "merchant",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "merchantHash",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "roles",
		"outputs": [
			{
				"internalType": "enum ReliefSupplyChain.Role",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

/* ---------------- GLOBALS ---------------- */

let provider;
let signer;
let contract;
let userAddress;

/* ---------------- INIT WEB3 ---------------- */

export async function initWeb3() {
  if (!window.ethereum) {
    alert("MetaMask not found");
    return false;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    ABI,
    signer
  );

  return true;
}

export async function connectWallet() {
  await provider.send("eth_requestAccounts", []);
  userAddress = await signer.getAddress();
  return userAddress;
}


export async function getAllDisasters() {
  const results = [];
  let i = 0;

  while (true) {
    try {
      const d = await contract.disasters(i);
      if (!d[4]) break; // exists == false
      results.push({
        id: i,
        name: d[0],
        team: d[1],
        ngo: d[2],
        balance: d[3]
      });
      i++;
    } catch {
      break;
    }
  }
  return results;
}



/* ---------------- HELPERS ---------------- */

export function getContract() {
  if (!contract) throw new Error("Contract not initialized");
  return contract;
}

export function getUserAddress() {
  return userAddress;
}

/* ---------------- ROLE CHECK ---------------- */

export async function getMyRole() {
  const role = await contract.roles(userAddress);
  /*
    0 = NONE
    1 = MERCHANT
    2 = NGO
    3 = TEAM
  */
  return Number(role);
}

/* ---------------- DONOR ---------------- */

export async function donate(disasterId, ethAmount) {
  try {
    const tx = await contract.donate(disasterId, {
      value: ethers.utils.parseEther(ethAmount)
    });
    await tx.wait();
    alert("Donation successful");
  } catch (err) {
    console.error(err);
    alert("Donation failed");
  }
}

/* ---------------- TEAM ---------------- */

export async function placeOrder(disasterId, productId, quantity) {
  try {
    const tx = await contract.placeOrder(
      disasterId,
      productId,
      quantity
    );
    await tx.wait();
    alert("Order placed successfully");
  } catch (err) {
    console.error(err);
    alert("Order failed");
  }
}

/* ---------------- MERCHANT ---------------- */

export async function submitProof(disasterId, orderIndex, proofText) {
  try {
    const proofHash = ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes(proofText)
    );

    const tx = await contract.submitDeliveryProof(
      disasterId,
      orderIndex,
      proofHash
    );
    await tx.wait();
    alert("Delivery proof submitted");
  } catch (err) {
    console.error(err);
    alert("Proof submission failed");
  }
}

/* ---------------- NGO ---------------- */

export async function ngoVerify(disasterId, orderIndex) {
  try {
    const tx = await contract.ngoVerify(disasterId, orderIndex);
    await tx.wait();
    alert("NGO verification done");
  } catch (err) {
    console.error(err);
    alert("NGO verification failed");
  }
}

/* ---------------- ADMIN ---------------- */

export async function createDisaster(name, team, ngo) {
  try {
    const tx = await contract.createDisaster(name, team, ngo);
    await tx.wait();
    alert("Disaster created");
  } catch (err) {
    console.error(err);
    alert("Create disaster failed");
  }
}

export async function addProduct(pricePerUnitEth, merchant) {
  try {
    const priceWei = ethers.utils.parseEther(pricePerUnitEth);
    const tx = await contract.addProduct(priceWei, merchant);
    await tx.wait();
    alert("Product added");
  } catch (err) {
    console.error(err);
    alert("Add product failed");
  }
}

export async function releasePayment(disasterId, orderIndex) {
  try {
    const tx = await contract.adminVerifyAndPay(
      disasterId,
      orderIndex
    );
    await tx.wait();
    alert("Payment released to merchant");
  } catch (err) {
    console.error(err);
    alert("Payment release failed");
  }
}


// Get single disaster details
export async function getDisaster(disasterId) {
  const d = await contract.disasters(disasterId);
  return {
    name: d[0],
    team: d[1],
    ngo: d[2],
    balance: d[3],
    exists: d[4]
  };
}

// Get products list (simple scan)
export async function getAllProducts() {
  const list = [];
  let i = 0;

  while (true) {
    try {
      const p = await contract.products(i);
      if (!p[3]) break; // active == false
      list.push({
        id: i,
        price: p[0]
      });
      i++;
    } catch {
      break;
    }
  }
  return list;
}

export async function getOrdersForDisaster(disasterId) {
  const orders = [];
  let i = 0;

  while (true) {
    try {
      const o = await contract.disasterOrders(disasterId, i);
      orders.push({
        index: i,
        productId: o[0],
        quantity: o[1],
        delivered: o[2],
        ngoVerified: o[3],
        adminVerified: o[4]
      });
      i++;
    } catch {
      break;
    }
  }
  return orders;
}
