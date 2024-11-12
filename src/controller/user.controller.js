const { db } = require("./../db/config");
const bcrypt = require("bcryptjs");
const getAlluser = async (req, res) => {
	try {
		const sql = "SELECT * FROM users";
		const [query] = await db.query(sql);
		return res.status(200).json(query);
	} catch (error) {
		return res.status(500).json({ error: "Database error" });
	}
};
const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const sql = "SELECT * FROM users WHERE id = ?";
		const [query] = await db.query(sql, [id]);
		return res.status(200).json(query);
	} catch (error) {
		return res.status(500).json({ error: "Database error" });
	}
};
const createUser = async (req, res) => {
	try {
		console.log(req.body);
		const { username, email, phone_number, address, password, avatar } = req.body;
		const sql = "INSERT INTO users (username, email, phone_number, address, password, avatar) VALUES (?, ?, ?, ?, ?, ?)";
		const hashedPassword = bcrypt.hashSync(password, 10);
		const values = [username, email, phone_number, address, hashedPassword, avatar];
		// check if user is exists
		const [query] = await db.query("SELECT * FROM users WHERE email = ? or username = ?", [email, username]);
		if (query.length > 0) {
			return res.status(400).json("User already exists");
		}
		await db.query(sql, values);
		return res.status(200).json("User created successfully");
	} catch (error) {
		console.log(error);
		return res.status(500).json("Internal server error");
	}
};
const destroyUser = (req, res) => {
	const { id } = req.params;
	try {
		const sql = "DELETE FROM users WHERE id = ?";
		const values = [id];
		db.query(sql, values);
		return res.status(200).json("User deleted successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
};
const changePassword = async (req, res) => {
	const { id } = req.params;
	const { password, old_password } = req.body;
	try {
		// check if user password is correct
		const [query] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
		if (query.length === 0) {
			return res.status(404).json("User not found");
		}
		if (!bcrypt.compareSync(old_password, query[0].password)) {
			return res.status(400).json("Password is incorrect");
		}
		const sql = "UPDATE users SET password = ? WHERE id = ?";
		const hashedPassword = bcrypt.hashSync(password, 10);
		const values = [hashedPassword, id];
		await db.query(sql, values);
		return res.status(200).json("Password changed successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
};
const updateUser = async (req, res) => {
	const { username, email, phone_number, address, password, avatar } = req.body;
	const { id } = req.params;
	const hashedPassword = bcrypt.hashSync(password, 10);

	const sql = "UPDATE users SET username = ?, email = ?, phone_number = ?, address = ?, password = ?, avatar = ? WHERE id = ?";
	const values = [username, email, phone_number, address, hashedPassword, avatar, id];
	try {
		await db.query(sql, values);
		return res.status(200).json("User created successfully");
	} catch (error) {
		return res.status(500).json("Internal server error");
	}
};

module.exports = {
	getAlluser,
	getUser,
	createUser,
	destroyUser,
	changePassword,
	updateUser,
};
