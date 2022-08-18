const express = require('express');
const routes = require('./routes');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

routes(app);

app.listen(port, _ => {
  console.log(`API is running, port: ${port}`);
});

module.exports = app;