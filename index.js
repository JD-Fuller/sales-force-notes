import express from "express";

const app = express();
const PORT = 4300;

app.get("/", (req, res) => {
  res.json({
    message: "SalesForce Notes v.1"
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
