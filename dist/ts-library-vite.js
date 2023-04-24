const u = (s, r) => s - r, n = (s, r) => s / r;
class c {
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
class o {
  constructor() {
  }
  multi(r, t) {
    return r.map((a) => a * t);
  }
}
export {
  o as ArrayClass,
  c as MathClass,
  n as divite,
  u as subtract
};
