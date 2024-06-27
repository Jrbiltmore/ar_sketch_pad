
const express = require('express');
const router = express.Router();

router.post('/zapier-webhook', (req, res) => {
    const data = req.body;
    // Handle Zapier webhook data
    console.log('Zapier Webhook received:', data);
    res.status(200).send('Webhook received');
});

router.post('/ifttt-webhook', (req, res) => {
    const data = req.body;
    // Handle IFTTT webhook data
    console.log('IFTTT Webhook received:', data);
    res.status(200).send('Webhook received');
});

module.exports = router;
