let obj = {
    _i: 0,
    _array: [],
    _limit: 11,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (this._array.length === 0) {
        this._array.push(0);
        this._i++;
        return { value: 0, done: this._i > this._limit };
      } else if (this._array.length === 1) {
        this._array.push(1);
        this._i++;
        return { value: 1, done: this._i > this._limit };
      } else {
        const value = this._array[this._i - 2] + this._array[this._i - 1];
        this._array.push(value);
        this._i++;
        return { value: value, done: this._i > this._limit };
      }
    },
    return() {
      return { done: true };
    },
  };
  
  console.log([...obj]);