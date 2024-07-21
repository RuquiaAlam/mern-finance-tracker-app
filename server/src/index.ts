import express, { Express, Request, Response } from "express";
import financialRecordRouter from "./routes/financial-records";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import dotenv from "dotenv"
import cors from "cors";
// app.use(dotenv)
const app: Express = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "20480kb" }));
const MONGOURI: string =
  "mongodb+srv://Ruquia:ERPInc_1826@cluster0.dnrbf0r.mongodb.net/mernapp-financetracker-app?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGOURI)
  .then(() => console.log("Connected to MONGODB"))
  .catch(() => console.log("Failed to connect to MongoDb"));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/financial-records", financialRecordRouter);
