/* eslint-disable object-curly-spacing */
// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe")(functions.config().stripe.secret);

admin.initializeApp();
const db = admin.firestore();
const app = express();

// Enable CORS for your API
app.use(cors({ origin: true }));
app.use(express.json()); // Parse incoming JSON data

// API Endpoint to create a new user profile
app.post("/createUserProfile", async (req, res) => {
  const { email, uid } = req.body;
  try {
    await db.collection("users").doc(uid).set({
      email: email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      workoutPlan: [],
      nutritionPlan: [],
      performanceTips: [],
    });
    res.status(200).send({ message: "User profile created successfully!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// API Endpoint to create a Stripe Checkout session
// app.post("/createCheckoutSession", async (req, res) => {
//   const { priceId } = req.body;
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price: priceId,
//           quantity: 1,
//         },
//       ],
//       mode: "subscription",
//       success_url: "https://your-app-url/success",
//       cancel_url: "https://your-app-url/cancel",
//     });

//     res.status(200).send({ id: session.id });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// Webhook for Stripe payment events
// app.post("/webhook", async (req, res) => {
//   const sig = req.headers["stripe-signature"];
//   const endpointSecret = functions.config().stripe.webhook_secret;

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
//   } catch (err) {
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     // Update Firestore or perform fulfillment steps
//     console.log(`Checkout session completed: ${session.id}`);
//   }

//   res.status(200).json({ received: true });
// });

// Export Express app to Firebase Cloud Functions
exports.api = functions.https.onRequest(app);

// Firebase function to automatically create user profile on user signup
exports.createUserProfile = functions.auth.user().onCreate((user) => {
  return db.collection("users").doc(user.uid).set({
    email: user.email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    workoutPlan: [],
    nutritionPlan: [],
    performanceTips: [],
  });
});
