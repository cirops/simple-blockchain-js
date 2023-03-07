import { Block } from "./entities/Block.js";
import { Blockchain } from "./entities/Blockchain.js";

const learningCoin = new Blockchain();

console.log("Mining block 1...");
learningCoin.addBlock(new Block(1, "10/07/2023", { amount: 4 }));

console.log("Mining block 2... ");
learningCoin.addBlock(new Block(2, "12/07/2023", { amount: 10 }));
