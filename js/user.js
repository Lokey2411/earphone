import { userCheck } from "./server/controllers/user_check.js";
import { ROLES } from "./server/data/roles.js";
document.body.onload = () => {
	if (!userCheck(ROLES.USER)) {
		alert("Failed");
		document.write("You haven't logged in yet");
	}
};
