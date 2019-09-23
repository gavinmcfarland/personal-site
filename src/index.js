import express from "express";
import slash from 'express-slash';

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
	Home.render({}, res);
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

// Start the server
app.listen(port, err => {
	if (err) {
		throw err;
	}

	if (port !== "0") {
		console.log(`Listening on port ${port}`);
	}
});
