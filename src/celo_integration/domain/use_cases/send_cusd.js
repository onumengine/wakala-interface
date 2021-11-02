import UseCase from "../../core/utils/use_case_interface";

/**
 * 
 * @class SendCUSD
 * @extends UseCase
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class SendCUSD extends UseCase {
    constructor(sendCUSDRepository) {
        this.sendCUSDRepository = sendCUSDRepository;
    }
    call(amount) {
        this.sendCUSDRepository.sendCUSD(amount);
    }
}

export default SendCUSD;
