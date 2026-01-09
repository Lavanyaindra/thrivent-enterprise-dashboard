const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/workspaces", require("./routes/workspaces"));
app.use("/api/members", require("./routes/members"));
app.use("/api/programs", require("./routes/programs"));
app.use("/api/roadmaps", require("./routes/roadmaps"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
