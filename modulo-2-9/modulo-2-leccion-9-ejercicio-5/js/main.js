"use strict";

const tree = [];
const star = ["★"];
const log = ["|"];

for (let i = 0; i < 5; i++) {
  tree.push("▲".repeat(i + 1));
}

const completeTree = star.concat(tree, log);

for (let i = 0; i < completeTree.length; i++) {
  console.log(completeTree[i]);
}
