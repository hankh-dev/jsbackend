const { MongoClient } = require("mongodb");
// const uri = "mongodb+srv://<user>:<password>@<atlashost>/board";
const uri = `mongodb+srv://hankh:${process.env.DB_PASS}@cluster0.8walzr5.mongodb.net/board?retryWrites=true&w=majority`;

module.exports = function (callback) {
  const client = new MongoClient(uri, { monitorCommands:true });
  client.on('commandStarted', (event) => console.debug(event));
  client.on('commandSucceeded', (event) => console.debug(event));
  client.on('commandFailed', (event) => console.debug(event));
  return client;
};
