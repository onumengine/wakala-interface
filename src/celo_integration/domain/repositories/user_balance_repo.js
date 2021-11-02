import { AbstractClassInstantiationError, AbstractMethodCallError } from "../../core/error/custom_errors";

/**
 * 
 * @AbstractClass UserBalanceRepository
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class UserBalanceRepository {
    constructor() {
        if (this.constructor === UserBalanceRepository) {
            throw new AbstractClassInstantiationError();
        }
    }
    getCurrentUserBalance() {
        throw new AbstractMethodCallError();
    }
}

export default UserBalanceRepository;
