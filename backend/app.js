
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileRoutes');
const widgetRoutes = require('./routes/widgetRoutes');
const ideRoutes = require('./routes/ideRoutes');
const webhookRoutes = require('./routes/webhookRoutes');
const adobeRoutes = require('./routes/adobeRoutes');
const advancedActions = require('./routes/advancedActions');
const config = require('./config');

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use('/api/files', fileRoutes);
app.use('/api/widgets', widgetRoutes);
app.use('/api/ide', ideRoutes);
app.use('/api/webhooks', webhookRoutes);
app.use('/api/adobe', adobeRoutes);
app.use('/api/actions', advancedActions);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
