import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema ({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    gitRepo: {
        type: String,
        required: true,
    },
});

const ReviewSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
})

const AboutSchema = new mongoose.Schema ({
    description: {
        type: String,
        required: true,
    },
})

const Project = mongoose.model("Project", ProjectSchema);
const Review = mongoose.model("Review", ReviewSchema);
const About = mongoose.model("About", ReviewSchema);

export {
    Project,
    Review,
    About
};