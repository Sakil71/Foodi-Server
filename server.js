import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";


// App Config
const app = express();
const port = 4000;


// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
connectDb();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);


app.get('/', (req, res) => {
    res.send("Server Working");
})


app.listen(port, () => {
    console.log(`server starting on http://localhost:${port}`);
})