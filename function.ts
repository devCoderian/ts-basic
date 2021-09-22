function add_1(num1:number, num2: number):number{
    return num1+num2;
    // console.log(num1+num2);
}

function add_2(num1:number, num2: number):void{
    //return num1+num2;
     console.log(num1+num2);
}

function isAdult1(age:number):boolean{
    return age > 19;
}

function hello1(name:string):string{
    return `Hello, ${name || "world"}`;
}

const result1 = hello1();//error

function hello2(name?:string):string{
    return `Hello, ${name || "world"}`;
}

const result2 = hello2();

function hello3(name = "world"){
    return `Hello, ${name}`
}

//선택적 매개변수가 필수 매개변수보다 앞에 오면 에러 발생함
function hello4(age?: number, name: string):string{
    if(age !== undefined){
        return `Hello, ${name}. age ${age}`
    }else{
        return `Hello, ${name}`
    }
}
function hello5(name: string, age?: number):string{
    if(age !== undefined){
        return `Hello, ${name}. age ${age}`
    }else{
        return `Hello, ${name}`
    }
}

// 단 사용시 hello6(undefined, 'ian') undefined 명시
function hello6(age: number|undefined, name: string):string{
    if(age !== undefined){
        return `Hello, ${name}. age ${age}`
    }else{
        return `Hello, ${name}`
    }
}

//나머지 매개 변수 사용
function add_3(...nums: number[]){
    return nums.reduce((result, num)=> result + num, 0)
}

//this 사용 
interface UserName{
    name:string;
}

const ian: UserName = { name: 'Ian'}

//this에 타입값 주기
function showName(this:UserName){
    console.log(this.name)
}
const show = showName.bind(ian);
show();

//만약 매개변수가 있다면?
function showName2(this:UserName, age:number, gender: 'm'| 'f'){
    console.log(this.name ,age, gender)
}

const show2 = showName2.bind(ian);
//this빼고 차례대로 바인딩된다.
show2(30,'m');

//오버로딩
interface UserJoin {
    name: string,
    age: number
}

function join(name: string, age:string): string;
function join(name: string, age:number): UserJoin;

function join(name: string, age: number | string): UserJoin | string {
    if(typeof age === "number"){
        return {
            name,
            age,
        };
    }else{
        return "숫자로 입력해주세요";
    }
}

const snow: UserJoin = join("snow", 28);
const jian: string = join("ian","26");