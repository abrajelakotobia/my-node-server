// MongoDb.js
import mongoose from 'mongoose';

export async function connectDatabase() {
  try {
    // Your database connection code here
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}
