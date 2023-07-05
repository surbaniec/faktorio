import mongoose from 'mongoose';

let isConnected = false; // track the connection status

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'faktorio',
    });

    isConnected = true;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
