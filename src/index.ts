import CLI from "./main/cli";

export async function main() {
  new CLI().run(process.argv);
}
