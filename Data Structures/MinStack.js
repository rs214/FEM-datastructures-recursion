//Implementing a min stack
//Constant time to keep track of minimum value in stack => efficient

function MinStack (capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

MinStack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    if (this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this.storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity reached. Remove element before adding a new one.';
};

