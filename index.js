import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT
const URI= process.env.DATABASE
// connect to mongodb
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("Connected");
} catch (error) {
  console.log("Error: ",error);
}
//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})