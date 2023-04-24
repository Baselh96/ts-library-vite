const o = (s, r) => s - r, u = (s, r) => s / r;
class e {
  constructor() {
  }
  sum(r, t) {
    return r + t;
  }
  multi(r, t, a) {
    return r * t * a;
  }
  around(r) {
    return Math.round(r);
  }
  max(r, t) {
    return Math.max(r, t);
  }
}
class n {
  constructor() {
  }
  multi(r, t) {
    return r.map((a) => a * t);
  }
}
class l {
  constructor() {
  }
  sayHello() {
    return "Hello everyone!";
  }
}
export {
  n as ArrayClass,
  l as Hello,
  e as MathClass,
  u as divite,
  o as subtract
};
