# Blog App 📝

A simple CRUD (Create, Read, Update, Delete) blog application built with **Node.js**, **Express**, and **EJS**.  
Deployed on [Render](https://blog-app-jm7l.onrender.com).

---

## 🚀 Features
- Create new blog posts
- View all posts on the homepage
- View individual post pages
- Edit existing posts
- Delete posts
- Styled with **Bootstrap 5**

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express
- **Templating Engine:** EJS
- **Styling:** Bootstrap 5
- **Deployment:** Render

---

## Project Structure

Blog-App/
├── app.js # Main application file (Express server)
├── package.json # Project dependencies and scripts
├── package-lock.json
├── views/ # EJS templates (frontend views)
│ ├── index.ejs # Home page (list of posts)
│ ├── compose.ejs # Form to create a new post
│ ├── edit.ejs # Form to edit an existing post
│ ├── show.ejs # Single post page
│ └── partials/ # Shared layout files
│ ├── header.ejs
│ └── footer.ejs
├── public/ # Static assets (CSS, JS, images)
│ └── styles.css
└── README.md # Project documentation

