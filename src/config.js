import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "localhost",
    database: process.env.DATABASE || "sistema_pupuseria",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || ""
};
