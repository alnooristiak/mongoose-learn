import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminUsersFromDb, getByIdFromDb, getUsersToDb } from "./user.services";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body;

    const user = await createUserToDb(data);

    res.status(200).json({
        status: "success",
        data: user
    })
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersToDb();

    res.status(200).json({
        status: "success",
        data: user
    })
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await getByIdFromDb(id);
    console.log("hited from getUserById")

    res.status(200).json({
        status: "success",
        data: user
    })
};


export const getAdminUsers= async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUsersFromDb();
    res.status(200).json({
        status: "success",
        data: user
    })
};
