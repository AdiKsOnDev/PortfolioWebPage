import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DataBaseConnect } from "./DataBaseConnect.js";
import { About, Project } from "./Models.js";
import { Review } from "./Models.js";
import path from "path";

dotenv.config();
DataBaseConnect();

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app build directory
app.use(express.static(path.join("../front-end/", 'build')));

app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

app.get("/", async(req, res) => {
    res.sendFile(path.join("../front-end/", 'build', 'index.html'));
});

app.get("/projects", async(req, res) => {
    try {
        const projects = await Project.find({}).sort({ _id: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ msg: "Data could not be found." });
    }
});

app.get("/about", async(req, res) => {
    try {
        const about = await About.find({}).sort({ _id: -1 });
        res.status(200).json(about);
    } catch (error) {
        res.status(404).json({ msg: "Data could not be found." });
    }
});

// app.post("/", async(req, res) => {
//     try {
//         const {email, name, review} = req.body;
//         const newReview = {
//             email,
//             name,
//             review,
//         };

//         if (newReview) {
//             const review = await Review.create(newReview);
//             res.status(201).json(review);
//         }
//     } catch (error) {
//         res.status(404).json({
//             message: "Sorry, something is wrong with your data.",
//             err: error.message
//         });
//     }
// })

app.post("/", async(req, res) => {
    try {
        const {image, title, description, gitRepo} = req.body;
        const newProject = {
            image,
            title,
            description,
            gitRepo,
        };

        if (newProject) {
            const project = await Project.create(newProject);
            res.status(201).json(project);
        }
    } catch (error) {
        res.status(404).json({
            message: "Sorry, something is wrong with your data.",
            err: error.message
        });
    }
})

app.listen(port, () => {
    console.log(`Listening to the server at http://localhost:${port}`);
});