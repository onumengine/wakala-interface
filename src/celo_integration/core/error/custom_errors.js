class AbstractClassInstantiationError extends Error {
    constructor() {
        super('Abstract classes can not be instantiated')
    }
}

class AbstractMethodCallError extends Error {
    constructor() {
        super('Abstract methods have to be implemented');
    }
}

module.exports = {
    AbstractClassInstantiationError,
    AbstractMethodCallError,
};
