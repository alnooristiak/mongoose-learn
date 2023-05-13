import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema<IUser>({
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
});

export const User = model<IUser>("User", userSchema);