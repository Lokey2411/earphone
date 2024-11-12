const express = require("express");
const { changePassword, createUser, destroyUser, getAlluser, updateUser, getUser } = require("./../controller/user.controller");

const router = express.Router();

router.get("/", getAlluser);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", destroyUser);
router.patch("/:id", changePassword);

module.exports = router;
