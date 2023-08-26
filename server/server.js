import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DataBaseConnect } from "./DataBaseConnect.js";
import Project from "./Models.js";

dotenv.config();
DataBaseConnect();

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

app.get("/", async(req, res) => {
    res.send("Connected")
});

app.get("/projects", async(req, res) => {
    try {
        const projects = await Project.find({}).sort({ _id: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ msg: "Data could not be found." });
    }
});

app.listen(port, () => {
    console.log(`Listening to the server at http://localhost:${port}`);
});