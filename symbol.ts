console.log(Symbol('foo') === Symbol('foo')); //false

//심볼은 고유한 값
const sym = Symbol();

const obj = {
    [sym]: 'value',
}

//obj["sym"] 문자열로 접근 했을 때 사용 불가능
obj[sym] //접근 가능으로 사용 많이 한다.