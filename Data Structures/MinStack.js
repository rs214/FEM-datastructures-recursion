//Implementing a min stack
//keeps track of another stack within the min stack that keeps values of the minimum
//Constant time to keep track of minimum value in stack => efficient

function MinStack (capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

//Constant time
MinStack.prototype.push = function (value) {
  //if we havent reach capacity
  if (this._count < this._capacity) {
    //if prev value is less than current val
    if (this._min.peek() < value) {
      //push that min value everytime
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this.storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity reached. Remove element before adding a new one.';
};

MinStack.prototype.pop = function () {

}
