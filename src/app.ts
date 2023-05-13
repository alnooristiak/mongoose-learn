import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';

const app: Application = express()

// using cors 
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // inserting a test data in to mongodb 
    /*
     step1: interface
     step2: schema
     step3: model
     step4: database Query
     */
    interface IUser {
        id: string;
        role: string;
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emargencyContactNo: string;
        presentAddress: string;
        parmanentAddress: string;
    }
    // creating schema using interface IUser
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            require: true,
            unike: true,
        },
        role: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        name: {
            firstName: {
                type: String,
                require: true,
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                require: true,
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: { 
            type: String,
            enum: ["male", "female"]
        },
        email: {
            type: String,
        },
        contactNo: {
            type: String,
            require: true,
        },
        emargencyContactNo: {
            type: String,
            require: true,
        },
        presentAddress: {
            type: String,
            require: true,
        },
        parmanentAddress: {
            type: String,
            require: true,
        },
        

        // avatar: String
    });
    // res.send('Hello World!');
    // next();
})



export default app;
