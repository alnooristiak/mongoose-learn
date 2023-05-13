import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express()

// using cors 
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // inserting a test data in to mongodb 
    /*
     step1: interface
     step2: schema
     step3: model
     step4: database Query
     */
    interface Iuser {
        id: string;
        role: string;
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        };
        dateOfBirth ?: string;
        gender: "male" | "female" ;
        email ?: string;
        contactNo: string;
        emargencyContactNo: string;
        presentAddress: string;
        parmanentAddress: string;
    }



    // res.send('Hello World!');
    // next();
})

export default app;
