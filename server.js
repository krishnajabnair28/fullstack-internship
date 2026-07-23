const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});
app.post("/blog", (req, res) => {
    res.send("Blog added successfully!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});