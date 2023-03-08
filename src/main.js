import EC from "elliptic";
import { Blockchain } from "./entities/Blockchain.js";
import { Transaction } from "./entities/Transaction.js";

const ec = new EC.ec("secp256k1");

const myKey = ec.keyFromPrivate(
  "b8fc1bde2a548d8323a4ae582a701f39058d93aebff7f56c34a353313a66d612"
);

const myWalletAddress = myKey.getPublic("hex");

const learningCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
learningCoin.addTransaction(tx1);

console.log("Starting the miner...");
learningCoin.minePendingTransactions(myWalletAddress);

console.log(`My balance: ${learningCoin.getBalanceOfAddress(myWalletAddress)}`);

learningCoin.chain[1].transactions[0].amount = 1;

console.log(`Is chain valid? ${learningCoin.isChainValid()}`);
