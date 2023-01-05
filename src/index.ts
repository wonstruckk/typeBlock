// import { exit, init } from "myPackage";

// const hello = () => "hi";

// class Block {
//   constructor(private data: string) {}
//   static hello() {
//     return "hi";
//   }
// }

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

// console.log("bye");

import crypto from "crypto";

interface BlockShape {
  prevHash: string;
  height: number;
  data: string;
  hash: string;
}

// static : 클래스 안에서 사용하는 함수, 클래스 인스턴스가 없어도 부를수 있는 함수

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Thrid one");

blockchain.getBlocks;
