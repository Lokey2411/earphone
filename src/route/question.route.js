const Express = require("express");
const { db } = require("../db/config");
const router = Express.Router();

router.get("/", async (req, res) => {
	const sql = "SELECT * FROM questions";
	try {
		const [query] = await db.query(sql);
		return res.status(200).json(query);
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.post("/", async (req, res) => {
	const { title, answer, type, parentQuestionId } = req.body;

	const sql = "INSERT INTO questions (title, answer, type, parentQuestionId) VALUES (?, ?, ?, ?)";
	const values = [title, answer, type, parentQuestionId];
	try {
		await db.query(sql, values);
		return res.status(200).json("Add question successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { title, answer, type, parentQuestionId } = req.body;
	const sql = "UPDATE questions SET title = ?, answer = ? , type = ?, parentQuestionId = ?  WHERE id = ?";
	const values = [title, answer, type, parentQuestionId, id];
	try {
		await db.query(sql, values);
		return res.status(200).json("Update question successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const sql = "DELETE FROM questions WHERE id = ?";
	const values = [id];
	try {
		const [query] = await db.query(sql, values);
		return res.status(200).json("delete question successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
});

module.exports = router;
