class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(val) {
        this.stack.push([val, Math.min(val, this.min)]);
        this.min = Math.min(val, this.min);
    }

    pop() {
        this.stack.pop();

        if (this.stack.length > 0) {
            this.min = this.stack[this.stack.length - 1][1];
        } else {
            this.min = Infinity;
        }
    }

    top() {
        return this.stack[this.stack.length - 1][0];
    }

    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}