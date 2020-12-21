class Group {
  constructor() {
    this.group = [];
  }

  add(i) {
    if (!this.has(i)) this.group.push(i);
  }

  delete(i) {
    if (this.has(i)) this.group = [...this.group].filter((x) => x !== i);
  }

  has(i) {
    return this.group.includes(i);
  }

  static from(arr) {
    const grp = new Group();
    arr.forEach((i) => grp.add(i));

    return grp;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.idx = 0;
  }

  next() {
    const value = this.group.group[this.idx];

    if (!value) return { done: true };

    this.idx++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
