const express = require('express');
const router = express.Router();

const {
    callReadFn
} = require('./api');

router.post('/callReadFn', async (req, res) => {
    const {
        rpcUrl,
        contractAbi,
        contractAddress,
        functionName,
        ...args
    } = req.body;

    try {
        let result = await callReadFn(rpcUrl, contractAbi, contractAddress, functionName, args);
        res.json(result);
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})

module.exports = router;