import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

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
    };
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

    const User = model<IUser>("User", userSchema);

    const createUserToDb = async () => {
        const user = new User({
            id: "487277",
            role: "77",
            password: "clg",
            name: {
                firstName: "Al",
                middleName: "Istiak",
                lastName: "Mahmud",
            },
            // dateOfBirth?: string;
            gender: "male",
            email: "alnooristiak@gmail.com",
            contactNo: "01710335722",
            emargencyContactNo: "01710335722",
            presentAddress: "barabkund-4312",
            parmanentAddress: "barabkund-4312",
        });
        await user.save();
        console.log(user); 
    }
    createUserToDb();

    // res.send('Hello World!');
    // next();
})



export default app;
