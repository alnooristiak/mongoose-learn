import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload)
    await user.save();
    return user;
}

export const getUsersToDb = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getByIdFromDb = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, password: 1 });
    return user;
}