import Cryptr from "cryptr";

const cryptObj = new Cryptr('12345');

// console.log(cryptObj.encrypt('hey there'));

const text = `9c2497598fb123122b930dcfa63c2cf2fc63f9d6dc47229ba4800d12cc2598e5a5cd3673107c4a927317e73fb2477127fcbc6ce42f30b5470576bcabbe2ce7c1ba71926ac356ce494cdf86feef44e1b418773158ca3a10a950f90cf5924409b00bf122def70e38c9d0`

console.log(cryptObj.decrypt(text));
