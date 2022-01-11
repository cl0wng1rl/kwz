import CLI from "./main/cli";
main();

async function main() {
  new CLI().run(process.argv);
}
