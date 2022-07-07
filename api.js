const ethers = require('ethers');

const callReadFn = async (
    rpcUrl,
    contractAbi,
    contractAddress,
    functionName,
    ...args
) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            provider
        );

        let parsedArgs = [];

        args.forEach((arg) => {
            for (key in arg) {
                if (arg.hasOwnProperty(key)) {
                    console.log(arg[key]);
                    parsedArgs.push(arg[key]);
                }
            }
        })

        const fn = await contract[functionName].apply(this, parsedArgs);

        let returnValues = {};

        for (i = 0; i < fn.length; i++) {
            if (ethers.BigNumber.isBigNumber(fn[i])) {
                returnValues[i] = parseInt(ethers.utils.formatUnits(fn[i], "wei"));
            } else {
                returnValues[i] = fn[i];
            }
        }

        return returnValues;

    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    callReadFn
}