import express from "express";
import slash from 'express-slash';
import api from './api';
// Enable gzip compression for all HTTP responses
import compression from "compression";
// Allow all of the generated files to be served up by Express
import serveStatic from "serve-static";

// const sanity = require("./sanity");

// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'kvqmg9w0',
//   dataset: 'production',
//   useCdn: false // `false` if you want to ensure fresh data
// })

// const query = '*[_type == "post"]'

// client.fetch(query).then(posts => {
//   posts.forEach(post => {
//     console.log(`${post.title}`)
//   })
// })

import Error404 from "./templates/404.marko";
import Post from "./templates/post.marko";
import Project from "./templates/project.marko";
import About from "./templates/about.marko";
import Projects from "./templates/projects.marko";
import Posts from "./templates/posts.marko";
import Cv from "./templates/cv.marko";
import Playground from "./templates/playground.marko";
import Home from "./templates/index.marko";

const app = express();
const port = process.env.PORT || 8080;

app.enable('strict routing');
app.use(compression());
app.use(slash());
app.use("/static", serveStatic("dist/client"));

api.then(content => {

	app.get("/", (req, res) => {
		Home.render({ projects: content.projects, ...content.home, work: content.projects, posts: content.posts }, res);
	});

	app.get("/cv", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		Cv.render({ ...content.resume }, res);
	});

	app.get("/playground", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		Playground.render({ ...content.resume }, res);
	});

	app.get("/projects", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		Projects.render({}, res);
	});

	app.get("/posts", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		Posts.render({ posts: content.posts }, res);
	});

	app.get("/about", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		About.render({}, res);
	});

	app.get("/posts/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.posts) {

			// If page exists then render page
			if (req.params.post === post.slug.current) {
				Post.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			Error404.render({}, res.status(404));
		}

	});

	app.get("/work/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.projects) {
			// If page exists then render page
			if (req.params.post === post.slug.current) {
				Project.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			Error404.render({}, res.status(404));
		}

	});

	// Render 404 for any unkown routes
	app.use(function (req, res) {
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
})
