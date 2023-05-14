import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role: "admin"})
  });

userSchema.method('fullName', function fullName() {
    return this.firstName + ' ' + this.lastName;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;