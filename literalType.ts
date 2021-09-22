const userName1 = "ian"; //정해진 값 문자열 리터럴 타입
let userName2 = "ian";

type JobType = "police" | "developer" | "teacher";

interface Job {
    name: string,
    job: JobType
}

const ianJob: Job = {
    name:"ian",
    job: "police"
}

interface HighSchool{
    name: string;
    grade: 1| 2| 3;
}

interface CAR{
    name:'car',
    color: string,
    start(): void
}

interface Mobile{
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift:CAR | Mobile){
    console.log(gift.color);
    //console.log(gift.call()); Mobile 에만 있는 함수
    if(gift.name === "car"){
        gift.start();
        //동일한 타입을 다르게 하는 것-> 식별가능한 유니온 타입
    }else{
        gift.call();
    }
}

//교차 타입

interface CARR {
    name: string;
    start(): void
}

interface TOY {
    name: string;
    color: string;
    price: number;
}

const toyCar: TOY & CARR = {
    name: "타요",
    start() {},
    color: "blue",
    price: 1000,
}; //여러개의 타입 합치는 기능