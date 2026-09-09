import dns from "dns";
import { MongoClient, Db } from "mongodb";

// Configure public DNS servers to reliably resolve MongoDB Atlas SRV records on Windows/Node.js
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch {
  // Ignore in restricted environments
}

function getMongoUri(): string {
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  }
  if (process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD) {
    const user = encodeURIComponent(process.env.MONGODB_USERNAME);
    const pass = encodeURIComponent(process.env.MONGODB_PASSWORD);
    return `mongodb+srv://${user}:${pass}@workforce.f18zegk.mongodb.net/workforce?retryWrites=true&w=majority`;
  }
  return "mongodb+srv://adarshdeepsachan_db_user:Do3OT5HokRM9tI0c@workforce.f18zegk.mongodb.net/workforce?retryWrites=true&w=majority";
}

const uri = getMongoUri();
const dbName = process.env.MONGODB_DB_NAME || "workforce";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | null = null;

export function getMongoClientPromise(): Promise<MongoClient> | null {
  if (!uri) {
    return null;
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      });
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  } else {
    if (!clientPromise) {
      const client = new MongoClient(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      });
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

export async function getMongoDb(): Promise<Db | null> {
  try {
    const promise = getMongoClientPromise();
    if (!promise) return null;
    const client = await promise;
    return client.db(dbName);
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas:", err);
    return null;
  }
}

export async function isMongoConnected(): Promise<boolean> {
  try {
    const db = await getMongoDb();
    if (!db) return false;
    await db.command({ ping: 1 });
    return true;
  } catch {
    return false;
  }
}
