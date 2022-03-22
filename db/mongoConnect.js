const mongoose = require("mongoose");
const { infConect } = require("../config/secret");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${infConect.name}:${infConect.password}@cluster0.i9y4f.mongodb.net/serverProject`);
  console.log("mongo atlas conect")
}
