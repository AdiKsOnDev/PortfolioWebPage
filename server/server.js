import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

app.get("/", async(req, res) => {
    res.send("Connected")
});

app.listen(port, () => {
    console.log(`Listening to the server at http://localhost:${port}`);
});