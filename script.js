//02 methad import
//import { add,user } from "./math.js";
import * as math from "./math.js";

import message from "./message.js";

console.log(math.user);
console.log("add 10 +32 =", math.add(10,32));
console.log(message("ranil", 50));

const userIdSymbal = Symbol("user id");
const users = {
  name: "salma",
  age: 52,
  [userIdSymbal]: 12345,
};

console.log(users.name); // "salma"
console.log(users[userIdSymbal]);