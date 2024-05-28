import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: ["https://book-store-client-ruby.vercel.app"],
    mthods:["POST","GET"],
    credentials:true
  }
));
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

//connect to mongo db

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error", error);
}

app.get("/",(req,res)=>{
    res.json("Hello backend side")
})

//defining routes

app.use("/book", bookRoute);

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
});
