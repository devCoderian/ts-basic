function error(message: string): never{
    throw new Error(message);
}

function fail(){
    return error("failed");
}

function infiniteLoop(): never{
    while(true){}
}

//let a:string = "hello";

// if(typeof a !== 'string'){
// a;
// }

declare const a: string | number;

if(typeof a !== "string"){
    a; //striing을 빼서 number로 타입지정 간으
}
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<{}>;

//const b: Indexable<{}> = ''; //never라서 잘못된 코드를 막고자 한다.

