var myOperations = {
    result: 0,
    plus2: function (){
        this.result = this.result + 2;
        return this;
    },
    timesThree: function () {
        this.result = this.result * 3;
        return this;
    },
    logResult: function () {
        console.log(this.result);
    }
};

myOperations.plus2().timesThree().logResult();

