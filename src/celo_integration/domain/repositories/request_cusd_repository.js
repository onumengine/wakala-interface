import { AbstractClassInstantiationError, AbstractMethodCallError } from "../../core/error/custom_errors";


/**
 * 
 * @AbstractClass RequestCUSDRepository
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class RequestCUSDRepository {
    constructor() {
        if (this.constructor === RequestCUSDRepository) {
            throw new AbstractClassInstantiationError();
        }
    }

    requestCUSD(amount) {
        throw new AbstractMethodCallError();
    }
}

export default RequestCUSDRepository;
