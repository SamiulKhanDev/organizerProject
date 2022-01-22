#!/usr/bin/env node
const branchFn = require("./functions/branch")
const organizeFn = require("./functions/organize");
const helpFn = require("./functions/help");

const input = process.argv.slice(2);
const val = input[1];
const command = input[0];
switch (command) {
  case "branch":
    branchFn(val);
    break;
  case "organize":
    // organizeFn(val);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("please input valid command");
    break;
}
