const Express = require("express");
const { db } = require("../db/config");
const router = Express.Router();

router.get("/", async (req, res) => {
	const sql = "SELECT * FROM jobs";
	try {
		const [query] = await db.query(sql);
		return res.status(200).json(query);
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.post("/", async (req, res) => {
	const { departmentId, type, description, salary, position, image, benefits, missions, requirements } = req.body;

	const sql = "INSERT INTO jobs (departmentId, type, description, salary, position, image, benefits, missions, requirements) VALUES (?, ?, ?, ?, ?, ?, ? ,? , ?)";
	const values = [departmentId, type, description, salary, position, image, benefits, missions, requirements];
	try {
		await db.query(sql, values);
		return res.status(200).json("Add job successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { departmentId, type, description, salary, position, image, benefits, missions, requirements } = req.body;
	const sql = "UPDATE jobs SET departmentId = ?, type = ?, description = ?, salary = ?, position = ?, image = ?, benefits = ? , missions = ? , requirements = ?  WHERE id = ?";
	const values = [departmentId, type, description, salary, position, image, benefits, missions, requirements, id];
	try {
		await db.query(sql, values);
		return res.status(200).json("Update job successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const sql = "DELETE FROM jobs WHERE id = ?";
	const values = [id];
	try {
		const [query] = await db.query(sql, values);
		return res.status(200).json("delete job successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

module.exports = router;
