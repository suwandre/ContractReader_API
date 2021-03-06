const express = require('express');
const router = express.Router();

const {
    callReadFn,
    callWriteFn
} = require('./api');

router.post('/callReadFn', async (req, res) => {
    const {
        rpcUrl,
        contractAbi,
        contractAddress,
        functionName,
        functionParams
    } = req.body;

    try {
        let result = await callReadFn(rpcUrl, contractAbi, contractAddress, functionName, functionParams);
        res.json(result);
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})

router.post('/callWriteFn', async (req, res) => {
    const {
        rpcUrl,
        contractAbi,
        contractAddress,
        functionName,
        privateKey,
        functionParams
    } = req.body;

    try {
        let result = await callWriteFn(rpcUrl, contractAbi, contractAddress, functionName, privateKey, functionParams);
        res.json(result);
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})


module.exports = router;