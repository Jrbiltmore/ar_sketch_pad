
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Example of an advanced action: automated file cleanup
router.post('/cleanup', (req, res) => {
    const directory = path.join(__dirname, '..', 'sandbox');

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    });

    res.status(200).send('Cleanup complete');
});

// Example of an advanced action: data processing
router.post('/process-data', (req, res) => {
    const data = req.body;

    // Process data (e.g., transform, analyze, etc.)
    const processedData = data.map(item => ({
        ...item,
        processed: true
    }));

    res.status(200).json(processedData);
});

module.exports = router;
