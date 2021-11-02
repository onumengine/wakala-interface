import UseCase from '../../core/utils/use_case_interface';


/**
 * 
 * @class RequestMPESA
 * @extends UseCase
 * 
 * @author [Peter Onum]{@link https://github.com/onumengine}
 */
class RequestMPESA extends UseCase {
    constructor(requestMPESARepository) {
        this.requestMPESARepository = requestMPESARepository;
    }

    call(amount) {
        this.requestMPESARepository.requestMPESA(amount);
    }
}

export default RequestMPESA;
