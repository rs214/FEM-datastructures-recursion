// Implementing a Queue with Two Stacks

function QueueTwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}


QueueTwoStacks.prototype.enqueue = function (val) {
  this.stackIn.push(val);
};

QueueTwoStacks.prototype.transferStacks = function () {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

QueueTwoStacks.prototype.dequeue = function () {
  if (this._stackOut.count() === 0) {
    this.transferStacks();
  }
  return this._stackOut.pop();
};

QueueTwoStacks.prototype.count = function () {
  return this._stackIn.count() + this._stackOut.count();
};

QueueTwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this.transferStacks();
  return this._stackOut.peek();
};