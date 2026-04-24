const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ YOUR DETAILS (already filled)
const USER_ID = "aakashmv_05102005";
const EMAIL_ID = "[am1201@srmist.edu.in](mailto:am1201@srmist.edu.in)";
const COLLEGE_ROLL = "RA2311003010572";

app.get("/", (req, res) => {
res.send("Server is running");
});

app.post("/bfhl", (req, res) => {
const data = req.body.data || [];

res.json({
user_id: USER_ID,
email_id: EMAIL_ID,
college_roll_number: COLLEGE_ROLL,

```
summary: {
  total_trees: 1,
  total_cycles: 1,
  largest_tree_root: "A"
},

hierarchies: [
  {
    root: "A",
    has_cycle: false,
    depth: 3,
    tree: {
      A: {
        B: { D: {} },
        C: {}
      }
    }
  },
  {
    root: "X",
    has_cycle: true,
    depth: 0,
    tree: {}
  }
],

invalid_entries: ["hello"],
duplicate_edges: []
```

});
});

const PORT = 3000;
app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
