import express from "express";
import slash from 'express-slash';
import API from 'static-api-generator'

import Error404 from "./pages/404/template.marko";

const api = new API({
	blueprint: 'content/:posts/:year/:month/:post',
	outputPath: 'api'
})

api.generate({
	endpoints: ['post'],
	levels: ['post']
})

const app = express();
const port = process.env.PORT || 8080;

app.enable('strict routing');

// Enable gzip compression for all HTTP responses
import compression from "compression";
app.use(compression());
app.use(slash());
// Allow all of the generated files to be served up by Express
import serveStatic from "serve-static";
app.use("/static", serveStatic("dist/client"));

// Initialize mock service routes
import initServices from "./services/routes";
initServices(app);

// Map the "/" route to the home page
import Home from "./pages/home/template.marko";
app.get("/", (req, res) => {

	res.setHeader("Content-Type", "text/html; charset=utf-8");

	let filePath = `${process.cwd()}/api/posts.json`;

	let fileContent = ""
	let nowJson = {}
	if (fs.existsSync(filePath)) {
		fileContent = fs.readFileSync(filePath).toString()
		nowJson = JSON.parse(fileContent);
		// console.log(nowJson);
	} else {
		let nowJson = {}
	}

	Home.render(nowJson.results[0], res);
});

// Map the "/" route to the home page
import Cv from "./pages/cv/template.marko";
app.get("/cv", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	Cv.render({}, res);
});

import Projects from "./pages/projects/template.marko";
app.get("/projects", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	Projects.render({}, res);
});

import About from "./pages/about/template.marko";
app.get("/about", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	About.render({}, res);
});

// // Map the "/" route to the home page
import Post from "./pages/posts/post/template.marko";
app.get("/:year/:month/:post", (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");

	let filePath = `${process.cwd()}/api/posts/${req.url}.json`

	if (fs.existsSync(filePath)) {
		let fileContent = fs.readFileSync(filePath).toString()
		let nowJson = JSON.parse(fileContent);
		// console.log(nowJson);
		Post.render(nowJson, res);
	} else {
		res.status(404);
		Error404.render({}, res);
	}

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
