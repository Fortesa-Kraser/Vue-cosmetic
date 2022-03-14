const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.addUserRole = functions.auth.user().onCreate(async (user) => {
  try {
    if (user.email.includes("ubt-uni.net")) {
      const userClaims = { admin: true };

      await admin.auth().setCustomUserClaims(user.uid, userClaims);

      db.collection("roles").doc(user.uid).set({
        email: user.email,
        role: userClaims,
      });
    }
  } catch (err) {
    console.log(err);
  }
});