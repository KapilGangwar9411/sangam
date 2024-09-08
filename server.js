const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simulated download counts for two PDFs
let downloadCounts = { '1': 0, '2': 0 };

// API to get download count for a specific PDF
app.get('/downloads/:section', (req, res) => {
    const section = req.params.section;
    res.json({ count: downloadCounts[section] });
});

// API to increment download count for a specific PDF
app.post('/downloads/:section', (req, res) => {
    const section = req.params.section;
    downloadCounts[section]++;
    res.json({ count: downloadCounts[section] });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
