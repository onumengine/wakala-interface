import UseCase from '../../core/utils/use_case_interface';


/**
 * 
 * @class RequestCUSD
 * @extends UseCase
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class RequestCUSD extends UseCase {
    constructor(requestCusdRepository) {
        this.requestCusdRepository = requestCusdRepository;
    }

    call(amount) {
        return this.requestCUSDRepository.requestCUSD(amount);
    }
}

export default RequestCUSD;
