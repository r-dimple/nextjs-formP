// pages/api/test.js
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('myCollection');

    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to connect to database' });
  }
}
