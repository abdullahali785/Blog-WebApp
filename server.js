import express from "express";
import bodyParser from "body-parser";
import path from "path";
import methodOverride from "method-override";

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];
let postID = 1;

app.get("/", (req, res) => {
    res.render("home.ejs", {posts : posts});
});

app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
    const newPost = {
        id : postID++,
        title : req.body.title,
        content : req.body.content
    };

    posts.push(newPost);
    console.log(posts);
    console.log(posts.length);

    res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("post", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("edit", { post });
});

app.put("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.title = req.body.title;
    post.content = req.body.content;

    res.redirect(`/posts/${post.id}`);
});

app.delete("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== postId);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}.`);
});

