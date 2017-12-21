function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    // ^---- Note
};

const obj = new Counter();
obj.add([3, 5, 8]);
obj.count;    // 3
obj.sum;      // 16