"use strict";
let x;
x = ["hello", 39];
//x = [10, 'Mark']; error
//x[2] = "world"; //튜플은 2자리 인데 3번째에 뭘 넣으려 함
const person = ["Mark", 39];
const [first, second] = person;
//const [first, second, thrid] = person; 길이가 안맞음
