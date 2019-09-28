import express from "express";
import slash from 'express-slash';
import jdown from 'jdown';
import api from './api';
// Enable gzip compression for all HTTP responses
import compression from "compression";
// Allow all of the generated files to be served up by Express
import serveStatic from "serve-static";

import Error404 from "./templates/404.marko";
import Post from "./templates/post.marko";
import About from "./templates/about.marko";
import Projects from "./templates/projects.marko";
import Cv from "./templates/cv.marko";
import Home from "./templates/index.marko";

const app = express();
const port = process.env.PORT || 8080;

app.enable('strict routing');
app.use(compression());
app.use(slash());
app.use("/static", serveStatic("dist/client"));

app.get("/", (req, res) => {
	api.then(content => {
		content.posts.map(function(post) {
			post.url = '/posts/' + post.slug
		})
		Home.render({ posts: content.posts }, res);
	})
});

app.get("/cv", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	api.then(content => {
		Cv.render({ ...content.cv }, res);
	})

});

app.get("/projects", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	Projects.render({}, res);
});

app.get("/about", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	About.render({}, res);
});

app.get("/posts/:post", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");

	api.then(content => {
		let err = true;

		for (let post of content.posts) {

			// If page exists then render page
			if (req.params.post === post.slug) {
				Post.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			Error404.render({}, res.status(404));
		}
	})

});

// Render 404 for any unkown routes
app.use(function(req, res) {
	Error404.render({}, res.status(404));
});

// Start the server
app.listen(port, err => {
	if (err) {
		throw err;
	}

	if (port !== "0") {
		console.log(`Listening on port ${port}`);
	}
});
