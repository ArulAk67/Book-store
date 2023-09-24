
import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import router from "./routes/book-routes.js";
const app = express();



// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 

mongoose.connect('mongodb://127.0.0.1:27017/book-store', {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
.then(() => {
    app.listen(5500, () => {
        console.log("Listening..");
    });
})
.catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
});