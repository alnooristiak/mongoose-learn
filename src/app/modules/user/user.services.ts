import User from "./user.model";

export const createUserToDb = async () => {
    const user = await new User({
        id: "487280",
        role: "79",
        password: "janina",
        name: {
            firstName: "test",
            middleName: "one",
            lastName: "test",
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
    // console.log(user); 
    return user;
}