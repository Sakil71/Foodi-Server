import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";


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


app.get('/', (req, res)=>{
    res.send("Server Working");
})


app.listen(port, ()=>{
    console.log(`server starting on http://localhost:${port}`);
})