function returnVoid(message: string): void{
    console.log(message);

    return;
}
const r = returnVoid('리턴이 없다.'); //어떤 타입도 할당 할 수 없다.
//void 이 함수의 리턴값으로 아무것도 하지 않겠다.

function returnVoidUndefined(message: string): void{
    console.log(message);

    return undefined;
}
//유일하게 undefined 할당 가능
