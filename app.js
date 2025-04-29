const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is a simple Node.js app deployed via AWS CodePipeline.');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
