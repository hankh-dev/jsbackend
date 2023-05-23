const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://hankh:${process.env.DB_PASS}@cluster0.8walzr5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());