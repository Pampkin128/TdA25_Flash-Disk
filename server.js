const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ "organization": "Student Cyber Games"});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
