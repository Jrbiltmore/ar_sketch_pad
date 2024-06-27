
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const sandboxPath = path.join(__dirname, '..', 'sandbox');

const createSandbox = (req, res, next) => {
    if (!fs.existsSync(sandboxPath)) {
        fs.mkdirSync(sandboxPath);
    }
    next();
};

const generatePrefix = () => {
    return crypto.randomBytes(8).toString('hex') + '_';
};

const saveFile = (req, res, next) => {
    const { fileName, fileContent } = req.body;
    const prefix = generatePrefix();
    const prefixedFileName = prefix + fileName;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.writeFileSync(filePath, fileContent);
    req.prefixedFileName = prefixedFileName;
    next();
};

const updateFile = (req, res, next) => {
    const { prefixedFileName, fileContent } = req.body;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.writeFileSync(filePath, fileContent);
    next();
};

const deleteFile = (req, res, next) => {
    const { prefixedFileName } = req.body;
    const filePath = path.join(sandboxPath, prefixedFileName);
    fs.unlinkSync(filePath);
    next();
};

module.exports = {
    createSandbox,
    saveFile,
    updateFile,
    deleteFile,
};
