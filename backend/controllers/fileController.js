
const fs = require('fs');
const path = require('path');
const sandboxMiddleware = require('../middleware/sandboxMiddleware');

const sandboxPath = path.join(__dirname, '..', 'sandbox');

const createFile = (req, res) => {
    const { fileName, fileContent } = req.body;
    const prefix = sandboxMiddleware.generatePrefix();
    const prefixedFileName = prefix + fileName;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.writeFileSync(filePath, fileContent);
    res.status(201).json({ message: 'File created successfully', prefixedFileName });
};

const updateFile = (req, res) => {
    const { prefixedFileName, fileContent } = req.body;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.writeFileSync(filePath, fileContent);
    res.status(200).json({ message: 'File updated successfully' });
};

const deleteFile = (req, res) => {
    const { prefixedFileName } = req.body;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.unlinkSync(filePath);
    res.status(200).json({ message: 'File deleted successfully' });
};

const downloadFile = (req, res) => {
    const { prefixedFileName } = req.params;
    const filePath = path.join(sandboxPath, prefixedFileName);
    const originalFileName = prefixedFileName.split('_').slice(1).join('_');
    res.download(filePath, originalFileName);
};

module.exports = {
    createFile,
    updateFile,
    deleteFile,
    downloadFile,
};
