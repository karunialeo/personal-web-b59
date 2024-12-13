const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Hello gaessss");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port : ${PORT}`);
});
