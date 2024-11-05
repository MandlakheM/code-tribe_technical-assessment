import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 2001;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/auth", authRoutes);
app.all("*", (req, res) => res.send("error 404 page not found"));

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);