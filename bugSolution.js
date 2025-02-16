```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb://localhost:27017/mydatabase"; // Correct URI, includes database name
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db('mydatabase');
    const collection = db.collection('myCollection');
    // Perform database operations here...
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```