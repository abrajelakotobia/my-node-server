import bcrypt from "bcryptjs";

const users = [{
        name: "Admin",
        email: "agence@abrajeimmo.ma",
        password: bcrypt.hashSync("lahouili1975/*-2022", 10),
        isAdmin: true,
    },
    {
        name: "Admin",
        email: "admin@abrajeimmo.ma",
        password: bcrypt.hashSync("19752022", 10),
        isAdmin: true,
    },
    {
        name: "User",
        email: "user@example.com",
        password: bcrypt.hashSync("123456", 10),
    },

];

export default users;