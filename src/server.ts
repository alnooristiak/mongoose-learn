import mongoose from 'mongoose';
import app from './app';


const port:number = 5000


// database Connection 
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Database Connection Suxcessful");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.log(`failed to connect database`, err)
    }
}
bootstrap(); //calling connected database connection


