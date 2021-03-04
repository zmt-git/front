import '@babel/polyfill'
const fn = () => {
  console.log('a');
  console.log('a');
};

const arr = [1,2,3]

console.log(arr.includes(4))

class Point {    constructor(x, y) {        this.x = x;        this.y = y;    };    getX() {        return this.x;    }}let cp = new ColorPoint(25, 8);