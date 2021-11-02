import UseCase from '../../core/utils/use_case_interface';


/**
 * 
 * @class GetCurrentBalance 
 * @extends UseCase
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class GetCurrentBalance extends UseCase {
    constructor(userBalanceRepository) {
        this.userBalanceRepository = userBalanceRepository;
    }
    call() {
        return this.userBalanceRepository.getCurrentBalance();
    }
}

export default GetCurrentBalance;
