
const fs = require('fs');
const path = require('path');
const sandboxMiddleware = require('../middleware/sandboxMiddleware');
const sandboxPath = path.join(__dirname, '..', 'sandbox');

const createWidget = (widgetName, widgetContent) => {
    const prefix = sandboxMiddleware.generatePrefix();
    const prefixedWidgetName = prefix + widgetName;
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    fs.writeFileSync(widgetPath, widgetContent);
    return prefixedWidgetName;
};

const updateWidget = (prefixedWidgetName, widgetContent) => {
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    fs.writeFileSync(widgetPath, widgetContent);
};

const deleteWidget = (prefixedWidgetName) => {
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    fs.unlinkSync(widgetPath);
};

const getWidgetContent = (prefixedWidgetName) => {
    const widgetPath = path.join(sandboxPath, prefixedWidgetName);
    return fs.readFileSync(widgetPath, 'utf8');
};

module.exports = {
    createWidget,
    updateWidget,
    deleteWidget,
    getWidgetContent,
};
