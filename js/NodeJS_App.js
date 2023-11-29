import express from "express";
import { join } from "path";
const app = express();

app.use(express.static(process.cwd()));

app.get("/", function (req, res) {
	res.sendFile(join(__dirname + "/index.html"));
});

app.listen(3000, function () {
	console.log("App is listening on port http://localhost:3000/");
});
