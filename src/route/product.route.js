const Express = require("express");
const { db } = require("../db/config");
const router = Express.Router();

router.get("/", async (req, res) => {
	const sql = "SELECT * FROM products";
	try {
		const [query] = await db.query(sql);
		return res.status(200).json(query);
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.post("/", async (req, res) => {
	const {  name, remain, shortDesc, price, image, type, listname } = req.body;

	const sql = "INSERT INTO products ( name, remain, shortDesc, price, image, type, listname) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
	const values = [ name, remain, shortDesc, price, image, type, listname];
	try {
		// check if listname is exist
		const [list] = await db.query("SELECT * FROM product_lists WHERE name = ?", [listname]);
		if (list.length === 0) {
			await db.query("INSERT INTO product_lists (name, description, subdescription, image, parent) VALUES (?, ?, ?, ?, ?)", [listname, "", "", "", null]);
		}
		await db.query(sql, values);
		return res.status(200).json("Add product successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, remain, shortDesc, price, image, type } = req.body;
	const sql = "UPDATE products SET name = ?, remain = ?, shortDesc = ?, price = ?, image = ?, type = ? WHERE id = ?";
	const values = [name, remain, shortDesc, price, image, type, id];
	try {
		const [query] = await db.query(sql, values);
		return res.status(200).json("Update product successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const sql = "DELETE FROM products WHERE id = ?";
	const values = [id];
	try {
		const [query] = await db.query(sql, values);
		return res.status(200).json("delete product successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

module.exports = router;
