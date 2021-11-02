const { AbstractClassInstantiationError, AbstractMethodCallError } = require("../../core/error/custom_errors");

/**
 * 
 * @AbstractClass SendCUSDRepository
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class SendCUSDRepository {
    constructor() {
        if (this.constructor === SendCUSDRepository) {
            throw new AbstractClassInstantiationError();
        }
    }
    sendCUSD(amount) {
        throw new AbstractMethodCallError();
    }
}

export default SendCUSDRepository;
