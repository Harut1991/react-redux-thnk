class Singleton {
    constructor(childClass){
        !childClass.instance && (childClass.instance = this);
        return childClass.instance;
    }
}

export default Singleton;