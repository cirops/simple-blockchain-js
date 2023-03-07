import { Blockchain } from "./entities/Blockchain.js";
import { Transaction } from "./entities/Transaction.js";

const learningCoin = new Blockchain();

learningCoin.createTransaction(new Transaction("address1", "address2", 100));
learningCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("Starting the miner...");
learningCoin.minePendingTransactions("address3");

console.log(
  `Address 1 balance: ${learningCoin.getBalanceOfAddress("address1")}`
);
console.log(
  `Address 2 balance: ${learningCoin.getBalanceOfAddress("address2")}`
);
console.log(
  `Address 3 balance: ${learningCoin.getBalanceOfAddress("address3")}`
);

console.log("Starting the miner again...");
learningCoin.minePendingTransactions("address3");

console.log(
  `Address 1 balance: ${learningCoin.getBalanceOfAddress("address1")}`
);
console.log(
  `Address 2 balance: ${learningCoin.getBalanceOfAddress("address2")}`
);
console.log(
  `Address 3 balance: ${learningCoin.getBalanceOfAddress("address3")}`
);
