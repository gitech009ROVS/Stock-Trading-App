import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Holding } from "./model/HoldingsModel.js";
import { Position } from "./model/PositionsModel.js";
import { Order } from "./model/OrderModel.js";
import { User } from "./model/UserModel.js";
import bodyParser from "body-parser";
import cors from "cors";

if (process.env.NODE_ENV != "production") {
  dotenv.config();
}

const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/add", async (req, res) => {
//   let tempHoldings = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempHoldings.forEach(async (ele) => {
//     let newHolding = new Position({
//       name: ele.name,
//       qty: ele.qty,
//       avg: ele.avg,
//       price: ele.price,
//       net: ele.net,
//       day: ele.day,
//       isLoss: ele.isLoss,
//     });
//     await newHolding.save();
//   });
//   res.send("done");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await Order.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved");
});

app.post("/signup", async (req, res) => {
  const data = req.body;
  const findings = await User.find({ username: data.username });

  if (findings.length === 0) {
    const newUser = new User(data);
    await newUser.save();
    res.status(200).json({ message: "Signup successful" });
  } else {
    res.status(409).json({ message: "Username already exists" });
  }
});

app.post("/login", async (req, res) => {
  const data = req.body;
  const findings = await User.find({ username: data.username });

  if (findings.length === 1) {
    if (findings[0].password === data.password) {
      res
        .status(200)
        .json({ message: "Login successful", username: data.username });
    } else {
      res.status(404).json({ message: "Wrong Password" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`The Server Started at the port ${port}`);
  mongoose.connect(url);
  console.log("DB connected successfully..");
});
