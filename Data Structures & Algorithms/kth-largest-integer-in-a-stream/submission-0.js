class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.arr = nums.sort((a, b) => b - a);
  }

  add(val) {
    this.arr.push(val);
    this.arr.sort((a, b) => b - a);
    return this.arr[this.k - 1];
  }
}
