const express = require("express")
const path = require("path")

const app = express()

app
.use(express.static('public'))

.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"))
})

.listen(5566)