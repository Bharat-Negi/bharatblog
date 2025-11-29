import { error } from "console";
import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        
        const connection = mongoose.connection
        connection.on('connected',() => {
            console.log('MongoDB Connected');
        })

        connection.on('error',() =>{
            console.log('MongoDB error DB running' + error);
            process.exit;
        })

    } catch (error) {
        console.log('error in bd connection');
        console.log(error)
    }
}