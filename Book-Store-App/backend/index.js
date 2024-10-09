import express, { request, response } from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());


app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Book Shop");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("App connected to db");
    app.listen(5555, () => {
      console.log(`App listening on port 5555!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
