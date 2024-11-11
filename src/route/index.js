const userRoute = require("./user.router");
const productRoute = require("./product.route");
const questionRoute = require("./question.route");
const jobRoute = require("./job.route");
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
];
