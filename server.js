const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Set Handlebars as the view engine
// app.engine("hbs", exphbs.engine({ extname: ".hbs" }));

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);

app.set("view engine", "hbs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files (like CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Define a route
app.get("/", (req, res) => {
  res.render("home", { title: "Welcome to Handlebars" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
    });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
