function returnAny(message:any):any{
    console.log(message);
}

const any1  = returnAny("any아무거나"); 

//any를 쓸 수 밖에 없는 것 -> 로그로 표현만 될때 -> 메세지가 어떤 타입인지 모를 때

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;


function leakingAny(obj: any){
    const a = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});

c.indexOf("0")

function leakingAnu(obj: any){
    const a:number = obj.num;
    const b = a + 1;
    return b;
}

const e = leakingAnu({num: 0});

//e.indexOf("0") 오류남 위에 넘버로 누수를 막아줬기 때문