const express = require("express");
const app = express();
const connection = require("./datbase/database.js")

app.use(require("./routes.js"))

app.listen(8080, () => {
  console.log("running in port 8080")
})
