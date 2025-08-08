const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/plants', (req, res) => {
  res.json([{ name: 'Aloe Vera', waterEvery: '7 days' }]);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
