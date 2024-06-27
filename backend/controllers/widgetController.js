
const fs = require('fs');
const path = require('path');
const sandboxMiddleware = require('../middleware/sandboxMiddleware');

const sandboxPath = path.join(__dirname, '..', 'sandbox');

const createWidget = (req, res) => {
    const { widgetName, widgetContent } = req.body;
    const prefix = sandboxMiddleware.generatePrefix();
    const prefixedWidgetName = prefix + widgetName;
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    fs.writeFileSync(widgetPath, widgetContent);
    res.status(201).json({ message: 'Widget created successfully', prefixedWidgetName });
};

const updateWidget = (req, res) => {
    const { prefixedWidgetName, widgetContent } = req.body;
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    fs.writeFileSync(widgetPath, widgetContent);
    res.status(200).json({ message: 'Widget updated successfully' });
};

const deleteWidget = (req, res) => {
    const { prefixedWidgetName } = req.body;
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    fs.unlinkSync(widgetPath);
    res.status(200).json({ message: 'Widget deleted successfully' });
};

const getWidget = (req, res) => {
    const { prefixedWidgetName } = req.params;
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    const widgetContent = fs.readFileSync(widgetPath, 'utf8');
    res.status(200).json({ widgetContent });
};

module.exports = {
    createWidget,
    updateWidget,
    deleteWidget,
    getWidget,
};
