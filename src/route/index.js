const userRoute = require("./user.router");
const productRoute = require("./product.route");
const questionRoute = require("./question.route");
const jobRoute = require("./job.route");

const express = require("express");
const { db } = require("../db/config");
const router = express.Router();
router.get("/product-lists", async (req, res) => {
	try {
		const [query] = await db.query("SELECT * FROM product_lists ");
		return res.status(200).json(query);
	} catch (error) {
		console.error(error);
		return res.status(500).json("Internal server error");
	}
});

router.get("/abouts/search/:field", async (req, res) => {
	const { field } = req.params;
	const value = req.query[field];
	try {
		const [query] = await db.query(`SELECT * FROM abouts WHERE ${field} = ?`, [value]);
		return res.status(200).json(query);
	} catch (error) {
		console.error(error);
		return res.status(500).json("Internal server error");
	}
});

module.exports = [
	{
		route: "/users",
		router: userRoute,
	},
	{
		route: "/products",
		router: productRoute,
	},
	{
		route: "/questions",
		router: questionRoute,
	},
	{
		route: "/jobs",
		router: jobRoute,
	},
	{
		route: "/",
		router,
	},
];
