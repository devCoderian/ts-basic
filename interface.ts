// let user:object;

// user = {
//     name: 'xx',
//     age:30
// }

// console.log(user.name)
type Score = 'A' | 'B' | 'C' | 'F'
interface User{
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    // 1?: string,
    // 2?: string,
    // 3?: string,
    // 4?: string,
    // [grade: number] : string; //넘버를 키로하고 string을 value로 받음
        [grade: number] : Score;
}

let user : User = {
    
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B'
    
}

user.gender = "male"
//user.birthYear = 1990; //readonly일 때 이후 수정 불가능
console.log(user.age);
console.log(user.gender);

interface Add{
    (num1: number, num2:number): number;
}

const add : Add = function(x, y){
    return x + y;
}

add(10, 20);

interface IsAdult {
    (age:number): boolean;
}

const aa: IsAdult= (age) =>{
    return age> 19;
}

aa(22)

//interface로 클래스를 정의할 때
interface Car{
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car{
    color;
    wheels = 4;

    constructor(c: string){
        this.color = c;
    }
    start(){
        console.log('go...')
    }
}

const bb = new Bmw('green');

console.log(bb);

//extends
interface Benz extends Car{
    door: number;
    stop(): void;
}

const benz : Benz = {

    door : 5,
    stop(){
        console.log('stop')
    },
    start(){
        console.log('go...')
    },
    color: '5',
    wheels: 4
}

//extends 여러개 가능
interface Toy{
    name:string
}

interface ToyCar  extends Car, Toy{
    price: number
}