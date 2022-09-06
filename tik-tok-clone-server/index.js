import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use("/", routes);
app.listen(port, () => console.log(`server is running on ${port}`));
