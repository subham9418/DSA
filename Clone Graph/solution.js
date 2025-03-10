var cloneGraph = function (node) {
  let oldToNew = new Map();

  let clone = function (n) {
    if (n === null) return null;

    if (oldToNew.has(n)) return oldToNew.get(n);

    let copy = new Node(n.val);

    oldToNew.set(n, copy);

    for (let nei of n.neighbors) {
      copy.neighbors.push(clone(nei));
    }

    return copy;
  };
  return clone(node);
};