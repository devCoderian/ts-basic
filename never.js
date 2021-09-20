"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== "string") {
    a; //striing을 빼서 number로 타입지정 간으
}
//const b: Indexable<{}> = ''; //never라서 잘못된 코드를 막고자 한다.
