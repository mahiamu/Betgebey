import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRouter } from './routes/userRouter.js';
import { residencyRoute } from './routes/residencyRoute.js';
import mongoose  from 'mongoose';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
})
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('Database connection error:', error));


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

//app.use('/api/user', userRoute)
app.use('/api/user', userRouter)
app.use("/api/residency", residencyRoute)