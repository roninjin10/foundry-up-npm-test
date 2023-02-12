import * as foundryup from "@foundry-rs/easy-foundryup";
import childProcess from "child_process";

console.log("running curl -L https://foundry.paradigm.xyz | bash");
childProcess.execSync("curl -L https://foundry.paradigm.xyz | bash");
console.log("running foundryup");
childProcess.execSync("foundryup");
