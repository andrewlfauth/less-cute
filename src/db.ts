import mongoose, {ConnectOptions} from 'mongoose'

let db
connect()

async function connect() {
  if (db) return db;

  if (process.env.NODE_ENV === "production") {
    db = await mongoose.connect(import.meta.env.MONGODB_URL, {
      useNewUrlParser: true,
    } as ConnectOptions)
      .catch((err) => console.error(err))
  } else {
    if (!global.__db) {
      global.__db = await mongoose.connect(import.meta.env.MONGODB_URL, {
        useNewUrlParser: true,
      } as ConnectOptions)
        .catch((err) => console.error(err))
    }
    db = global.__db;
  }
  return db;
}

export { mongoose, connect };