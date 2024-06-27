
const fs = require('fs');
const path = require('path');
const sandboxMiddleware = require('../middleware/sandboxMiddleware');
const sandboxPath = path.join(__dirname, '..', 'sandbox');

const createFile = (fileName, fileContent) => {
    const prefix = sandboxMiddleware.generatePrefix();
    const prefixedFileName = prefix + fileName;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.writeFileSync(filePath, fileContent);
    return prefixedFileName;
};

const updateFile = (prefixedFileName, fileContent) => {
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.writeFileSync(filePath, fileContent);
};

const deleteFile = (prefixedFileName) => {
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.unlinkSync(filePath);
};

const getFileContent = (prefixedFileName) => {
    const filePath = path.join(sandboxPath, prefixedFileName);
    return fs.readFileSync(filePath, 'utf8');
};

module.exports = {
    createFile,
    updateFile,
    deleteFile,
    getFileContent,
};
