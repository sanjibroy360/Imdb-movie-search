var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");

var movieListRouter = require("./routes/movie_list_router");
var searchRouter = require("./routes/search_router");

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/movies", movieListRouter);
app.use("/movies/search", searchRouter);

module.exports = app;
