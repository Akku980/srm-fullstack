const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔴 CHANGE THESE
const USER_ID = "yourname_ddmmyyyy";
const EMAIL_ID = "[your@srmist.edu.in](mailto:your@srmist.edu.in)";
const COLLEGE_ROLL = "RA2211003XXXXXX";

app.get("/", (req, res) => {
res.send("Server is running");
});

app.post("/bfhl", (req, res) => {
const data = req.body.data || [];

const numbers = data.filter(x => !isNaN(x));
const alphabets = data.filter(x => /^[a-zA-Z]+$/.test(x));

res.json({
is_success: true,
user_id: USER_ID,
email_id: EMAIL_ID,
college_roll_number: COLLEGE_ROLL,
numbers,
alphabets
});
});

const PORT = 3000;
app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
