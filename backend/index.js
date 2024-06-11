const express = require('express');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const serviceAccount = require('./fireBase/serviceAccountKey.json');

dotenv.config();

const app = express();

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const firestore = admin.firestore();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/add-user', async (req, res) => {
  const { username, email } = req.body;
  try {
    const docRef = firestore.collection('users').doc(username);
    await docRef.set({
      username,
      email
    });
    res.status(200).send('User added successfully');
  } catch (error) {
    console.error('Error adding user: ', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
