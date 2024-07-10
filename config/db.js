import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://foodi10:217121712171@projects.bphvjii.mongodb.net/foodi').then(() => console.log('MongoDB Connected'));
}