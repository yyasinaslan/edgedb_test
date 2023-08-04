import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js";

const client = edgedb.createClient();

async function main() {
  const result = e
    .insert(e.User, {
      name: "yasin",
    })
    .run(client);
}

main();
