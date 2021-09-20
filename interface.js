"use strict";
// let user:object;
let user = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B'
};
user.gender = "male";
//user.birthYear = 1990; //readonly일 때 이후 수정 불가능
console.log(user.age);
console.log(user.gender);
const add = function (x, y) {
    return x + y;
};
add(10, 20);
const aa = (age) => {
    return age > 19;
};
aa(22);
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('go...');
    }
}
const bb = new Bmw('green');
console.log(bb);
const benz = {
    door: 5,
    stop() {
        console.log('stop');
    },
    start() {
        console.log('go...');
    },
    color: '5',
    wheels: 4
};
