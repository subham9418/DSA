var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();

  let res = dummy;

  //reverse the list
  let revL1 = reverse(l1);
  let revL2 = reverse(l2);
  let sum = 0;
  let rem = 0;

  // Adding
  while (revL1 || revL2 || rem) {
    let a = revL1 === null ? 0 : revL1.val;
    let b = revL2 === null ? 0 : revL2.val;
    sum = a + b + rem;
    if (sum >= 10) {
      sum = sum % 10;
      rem = 1;
    } else {
      sum = sum;
      rem = 0;
    }
    let curr = new ListNode(sum);
    res.next = curr;
    res = res.next;
    if (revL1) revL1 = revL1.next;
    if (revL2) revL2 = revL2.next;
  }
  return reverse(dummy.next);
};

var reverse = function (list) {
  let prev = null;
  let curr = list;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};
