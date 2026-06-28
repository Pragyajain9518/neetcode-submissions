class Solution {
  invertTree(root) {
    if (root === null) return null;

    // 1️⃣ PREORDER STEP: swap first
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // 2️⃣ go left
    this.invertTree(root.left);

    // 3️⃣ go right
    this.invertTree(root.right);

    return root;
  }
}
