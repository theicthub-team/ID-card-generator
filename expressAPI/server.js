
const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
var cors = require('cors')

app.use(fileUpload());
app.use(cors());

//Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  const extension = file.name.split(".").pop();

  const randomName = Math.random().toString(36).substr(2, 16).concat(extension);

  file.mv(`${__dirname}/../reactApp/public/uploads/${randomName}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: randomName, filePath: `/uploads/${randomName}` });
  });
});

app.listen(5000, () => console.log("Server started..."));