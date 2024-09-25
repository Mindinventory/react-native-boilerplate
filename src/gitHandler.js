import { exec } from "child_process"
import util from "util"
const execAsync = util.promisify(exec)

export const gitInitialize = async() => {
  await execAsync("git init", { stdio: "inherit" });
  await execAsync("git add .");
  await execAsync(`git commit -m 'Initial commit'`);
}