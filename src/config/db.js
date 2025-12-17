const admin = require("firebase-admin");

const serviceAccount = process.env.GCLOUD_SECRET_KEY;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
console.log("🔥 Firebase Initialized");

module.exports = db;
