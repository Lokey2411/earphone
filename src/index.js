const express = require("express");
const app = express();
const routes = require("./route");
const bodyParser = require("body-parser");
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
