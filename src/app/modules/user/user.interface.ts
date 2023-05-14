export interface IUser {
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

export interface IUserMethods {
    fullName(): string;
}