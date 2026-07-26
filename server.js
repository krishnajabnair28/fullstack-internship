const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
const blogs = [];
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});
app.post("/blog", (req, res) => {
    const { title, content } = req.body;
    const newBlog = {
        id: blogs.length + 1,
        title,
        content
    };
    blogs.push(newBlog);
    res.status(201).send("Blog added successfully!");
});
app.get("/blogs", (req, res) => {
    res.json(blogs);
});
app.put("/blog/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { title, content } = req.body;

    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return res.status(404).send("Blog not found");
    }

    blog.title = title;
    blog.content = content;

    res.send("Blog updated successfully!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});