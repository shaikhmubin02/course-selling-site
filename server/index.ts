import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import adminRouter from "./routes/admin";
import userRouter from "./routes/user";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://shaikhmubin5502:shaikhmubin@cluster0.752s5ux.mongodb.net/', { dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));
