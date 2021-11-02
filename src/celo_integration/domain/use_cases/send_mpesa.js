import UseCase from "../../core/utils/use_case_interface";

/**
 * 
 * @class MPESA
 * @extends UseCase
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class SendMPESA extends UseCase {
    constructor(sendMPESARepository) {
        this.sendMPESARepository = sendMPESARepository
    }

    call() {
        this.sendMPESARepository.sendMPESA();
    }
}

export default SendMPESA;
