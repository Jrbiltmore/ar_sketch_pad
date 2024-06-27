
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/adobe-integration', async (req, res) => {
    const { apiKey, documentId } = req.body;

    try {
        const response = await axios.get(`https://api.adobe.com/document/${documentId}`, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        const documentData = response.data;

        // Handle Adobe document data
        console.log('Adobe document data:', documentData);
        res.status(200).json(documentData);
    } catch (error) {
        console.error('Error fetching Adobe document:', error);
        res.status(500).send('Error fetching Adobe document');
    }
});

module.exports = router;
