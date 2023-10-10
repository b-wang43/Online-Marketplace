import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.KEY)
.then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.listen(5173, () => {
    console.log('Server is running on port 5173');
});