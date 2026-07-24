const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const blogs = [];
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});
app.post("/blog", (req, res) => {
    const { title, content } = req.body;
    const newBlog = { id: blogs.length + 1, title, content };
    blogs.push(newBlog);
    res.status(201).send("Blog added successfully!");
});
app.get("/blogs", (req, res) => {
    res.json(blogs);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});