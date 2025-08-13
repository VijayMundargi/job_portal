const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const dbName = 'job_profile'; 

let db;

async function connectDB() {
  if (db) return db; 

  try {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    console.log(' Connected to MongoDB');
    db = client.db(dbName);
    return db;
  } catch (err) {
    console.error(' MongoDB connection error:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
