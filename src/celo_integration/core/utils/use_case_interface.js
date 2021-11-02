import { AbstractClassInstantiationError, AbstractMethodCallError } from "../error/custom_errors";

/**
 * 
 * @AbstractClass UseCase
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class UseCase {
    constructor() {
        if (this.constructor === UseCase) {
            throw new AbstractClassInstantiationError();
        }
    }

    call() {
        throw new AbstractMethodCallError();
    }
}

export default UseCase;
