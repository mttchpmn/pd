class PGroup {
  static empty = new PGroup([]);

  constructor(group = []) {
    this.group = group;
  }

  add(item) {
    return new PGroup([...this.group, item]);
  }

  delete(item) {
    return new PGroup([...this.group].filter((i) => i !== item));
  }

  has(item) {
    return this.group.includes(item);
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
