const { AbstractClassInstantiationError, AbstractMethodCallError } = require("../../core/error/custom_errors");


/**
 * 
 * @AbstractClass RequestMPESARepository
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class RequestMPESARepository {
    constructor() {
        if (this.constructor === RequestMPESARepository) {
            throw new AbstractClassInstantiationError();
        }
    }

    requestMPESA(amount) {
        throw new AbstractMethodCallError();
    }
}

export default RequestMPESARepository;
