class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(childNode) {
    this.left = childNode;
  }

  addRight(childNode) {
    this.right = childNode;
  }

  traverse(level = 0) {
    console.log("  ".repeat(level) + this.value);
    if (this.left) this.left.traverse(level + 1);
    if (this.right) this.right.traverse(level + 1);
  }

  inOrderTraversal() {
    if (this.left) this.left.inOrderTraversal();
    console.log(this.value);
    if (this.right) this.right.inOrderTraversal();
  }

  preOrderTraversal() {
    console.log(this.value);
    if (this.left) this.left.preOrderTraversal();
    if (this.right) this.right.preOrderTraversal();
  }

  postOrderTraversal() {
    if (this.left) this.left.postOrderTraversal();
    if (this.right) this.right.postOrderTraversal();
    console.log(this.value);
  }
}

// Example usage
const tree = new TreeNode("Root");
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");

tree.addLeft(child1);
tree.addRight(child2);

const subchild1 = new TreeNode("Subchild 1");
const subchild2 = new TreeNode("Subchild 2");

child1.addLeft(subchild1);
child1.addRight(subchild2);

tree.preOrderTraversal();
