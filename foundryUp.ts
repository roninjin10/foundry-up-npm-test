import * as foundryup from "@foundry-rs/easy-foundryup";
import childProcess from "child_process";

childProcess.execSync("curl -L https://foundry.paradigm.xyz | bash");
foundryup.run(true);
