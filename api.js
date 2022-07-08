const ethers = require('ethers');

const callReadFn = async (
    rpcUrl,
    contractAbi,
    contractAddress,
    functionName,
    functionParams
) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            provider
        );

        const fn = await contract[functionName].apply(this, functionParams);

        let returnValues = {};
        if (typeof fn === "object" || typeof fn === "array") {
            for (let i = 0; i < fn.length; i++) {
                if (ethers.BigNumber.isBigNumber(fn[i])) {
                    val = parseInt(ethers.utils.formatUnits(fn[i], "wei"));
                    returnValues[`param ${i}`] = val;
                } else {
                    returnValues[`param ${i}`] = fn[i];
                }
            }
        }

        return returnValues;

    } catch (err) {
        throw new Error(err);
    }
}

const callWriteFn = async (
    rpcUrl,
    contractAbi,
    contractAddress,
    functionName,
    privateKey,
    functionParams
) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            provider
        );

        const signer = new ethers.Wallet(privateKey, provider);

        let unsignedTx = await contract.populateTransaction[functionName].apply(this, functionParams);
        let response = await signer.sendTransaction(unsignedTx);

        await response.wait();

        const jsonResponse = JSON.parse(JSON.stringify(response));

        return {response: jsonResponse}
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    callReadFn,
    callWriteFn
}