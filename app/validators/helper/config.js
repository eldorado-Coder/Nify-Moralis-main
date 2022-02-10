const errorMessages = { 
    required : ':key is required',
    isString: ':key must be a string',
    isInt: ':key must be an integer',
    isIn: 'Should be one of this: :key',
    isEmail: ':key must be an valid email',
    minLengthPassword: 'Should be minimum 8 characters',
    getMessage(key, validationRule) {
       return this[validationRule].replace(':key', key)
    }
 };

 const chains = ['eth', '0x1', 'ropsten', '0x3', 'rinkeby', '0x4', 'goerli', '0x5', 'kovan',
 '0x2a', 'polygon', '0x89', 'mumbai', '0x13881', 'bsc', '0x38', 'bsc testnet', '0x61', 'avalanche',
 '0xa86a', 'fantom', '0xfa'];

 module.exports = {
   errorMessages,
   chains
}
