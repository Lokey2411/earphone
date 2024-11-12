const express = require("express");
const app = express();
const routes = require("./route");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:8080"],
		credentials: true,
	})
);

app.use(bodyParser.json());
app.get("/", (req, res) => {
	res.send("Hello World!");
});

routes.map(({ route, router }) => {
	app.use("/api" + route, router);
});

app.listen(process.env.PORT || 8000, () => {
	console.log("App is listening on port 8000");
});
