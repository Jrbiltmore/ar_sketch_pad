
const express = require('express');
const router = express.Router();
const sandboxMiddleware = require('../middleware/sandboxMiddleware');

// Route to create a new file
router.post('/create', sandboxMiddleware.createSandbox, sandboxMiddleware.saveFile, (req, res) => {
    res.status(201).json({ message: 'File created successfully', prefixedFileName: req.prefixedFileName });
});

// Route to update a file
router.put('/save', sandboxMiddleware.createSandbox, sandboxMiddleware.updateFile, (req, res) => {
    res.status(200).json({ message: 'File saved successfully' });
});

// Route to delete a file
router.delete('/delete', sandboxMiddleware.createSandbox, sandboxMiddleware.deleteFile, (req, res) => {
    res.status(200).json({ message: 'File deleted successfully' });
});

// Route to download a file
router.get('/download/:prefixedFileName', (req, res) => {
    const { prefixedFileName } = req.params;
    const filePath = path.join(sandboxPath, prefixedFileName);
    const originalFileName = prefixedFileName.split('_').slice(1).join('_');
    res.download(filePath, originalFileName);
});

module.exports = router;
