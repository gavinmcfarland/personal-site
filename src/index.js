import express from "express";

const app = express();
const port = process.env.PORT || 8080;

// Enable gzip compression for all HTTP responses
import compression from "compression";
app.use(compression());

// Allow all of the generated files to be served up by Express
import serveStatic from "serve-static";
app.use("/static", serveStatic("dist/client"));

// Initialize mock service routes
import initServices from "./services/routes";
initServices(app);

// Map the "/" route to the home page
import HomePage from "./pages/home";
app.get("/", HomePage);

// Map the "/" route to the home page
import Test from "./pages/test";
app.get("/test", Test);

// Map the "/" route to the home page
import Cv from "./pages/cv";
app.get("/cv", Cv);

// Start the server
app.listen(port, err => {
	if (err) {
		throw err;
	}

	if (port !== "0") {
		console.log(`Listening on port ${port}`);
	}
});
