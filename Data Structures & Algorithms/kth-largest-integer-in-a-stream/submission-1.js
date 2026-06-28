
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this._up(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down(0);
    return min;
  }

  _up(i) {
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  _down(i) {
    let n = this.heap.length;
    while (true) {
      let l = 2 * i + 1, r = 2 * i + 2, s = i;
      if (l < n && this.heap[l] < this.heap[s]) s = l;
      if (r < n && this.heap[r] < this.heap[s]) s = r;
      if (s === i) break;
      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
      i = s;
    }
  }
}
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinHeap();
   // for (let i = 0; i < nums.length; i ++) {
 for (let n of nums) {
      this.add(n);
    }
  }

  add(val) {
    this.heap.push(val);

    if (this.heap.size() > this.k) {
      this.heap.pop();
    }

    return this.heap.peek();
  }
}
