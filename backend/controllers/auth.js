import admin from "firebase-admin";
import serviceAccount from "../../key.json" assert { type: "json" };
import { auth } from "../../frontend/firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import generateToken from "../utils/utils.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export const signup = async (req, res) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      req.body.email,
      req.body.password
    );

    const userDetails = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    };

    const userRef = db.collection("users").doc(userCredential.user.uid);
    const newUserId = userRef.id;

    userDetails.userID = newUserId;

    await userRef.set(userDetails);

    res.status(201).send({
      message: "user added successfully",
      userId: newUserId,
      user: userDetails,
    });
  } catch (error) {
    console.error("Registration failed. Please try again.", error);
    res.status(500).send({
      message: "Failed to add new user",
      error: error.message,
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      const currentUser = data.user;

    //   console.log(currentUser);

      if (!currentUser) {
        return res.status(401).json({ error: "Invalid login credentials" });
      }

      const token = generateToken(currentUser.uid);
      res.status(200).json({
        message: "user sign in successfully",
        userid: currentUser.uid,
        email: currentUser.email,
        token,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Failed to add sign in",
        error: error.message,
      });
    });
};
