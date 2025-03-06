// Creation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let n1 = new Node(5);
let n2 = new Node(8);
let n3 = new Node(11);

let linkedList = n1;
n1.next = n2;
n2.next = n3;

console.log("Created List: ", linkedList);

// Traversal
while (linkedList !== null) {
  console.log(linkedList.value);
  linkedList = linkedList.next;
}

// Insertion of a node
function insert(data, list, pos) {
  let nodeToAdd = new Node(data);

  if (pos === 0) {
    nodeToAdd.next = list;
    list = nodeToAdd;
    return list;
  }

  let prev = list;
  for (let i = 0; i < pos - 1; i++) {
    prev = prev.next;
  }

  nodeToAdd.next = prev.next;
  prev.next = nodeToAdd;
  return list;
}

insert(10, linkedList, 2);

console.log("Updated List: ", linkedList);

// Deletion of a node:
function remove(list, pos) {
  if (pos === 0) {
    return list.next;
  }

  let prev = list;
  for (let i = 0; i < pos - 1; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return list;
}

let res = remove(linkedList, 1);
