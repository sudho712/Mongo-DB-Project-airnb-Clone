const express = require("express");
const mongoose = require("mongoose");

// Correct MongoDB URL format
const MONGO_URL = "mongodb://127.0.0.1:27017/amit";

// MongoDB Connection
async function main() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

main();

const app = express();

// Basic route for testing
app.get("/", (req, res) => {
    res.send("Hello, World! This is the lara Project");
});

// Start the server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
