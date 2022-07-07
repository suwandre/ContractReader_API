// const ethers = require('ethers');
// const fs = require('fs');
// const path = require('path');

// const smolJoeABI = () => {
//     const result = fs.readFileSync(
//         path.resolve(__dirname, './smolJoeABI.json'),
//         {encoding: 'utf8'}
//     )
//     console.log(result);
// };

// const provider = new ethers.providers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc');

// // const abi = JSON.parse(smolJoeABI);
// const contract = new ethers.Contract(
//     '0xC70DF87e1d98f6A531c8E324C9BCEC6FC82B5E8d',
//     abi,
//     provider
// );

// const moment = require('moment');

// const test = async () => {
//     try {
//         const allowlistStartTime = await contract.allowlistStartTime();
//         const parsed = ethers.utils.formatEther(allowlistStartTime) * 10 ** 18;
//         const converted = moment.unix(parsed).format('dddd, MMMM Do, YYYY h:mm:ss A');
//         console.log(converted);
//         // const readTest = await contract.BASIS_POINT_PRECISION();
//         // const parsed = ethers.utils.formatEther(readTest) * 10 ** 18;
//         // console.log(parsed);
//     } catch (err) {
//         console.log(err)
//     }
// }

smolJoeABI();
