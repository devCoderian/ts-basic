// const는 상수(변하지 않는 값)을 위해 사용합니다.
// const의 특징은 대부분 let과 동일합니다.(let 키워드 글 참조)

// 1.선언과 초기화
// let은 재할당이 자유롭지만 const는 재할당이 금지됩니다.

// const FOO = 123;
// FOO = 456; // TypeError: Assignment to constant variable.
// 주의할 점은 const는 반드시 선언과 동시에 할당이 이루어져야 한다는 것입니다. 그렇지 않으면 다음처럼 문법에러(SyntaxError)가 발생합니다.

// const FOO; // SyntaxError: Missing initializer in const declaration
// 또한 const는 let과 마찬가지로 블록 레벨 스코프를 갖습니다.

// {
//   const FOO = 10;
//   console.log(FOO); //10
// }
// console.log(FOO); // ReferenceError: FOO is not defined
// 2.상수
// 상수는 가독성과 유지보수의 편의를 위해 적극적으로 사용해야 합니다.
// 아래 예제를 참고해주세요.

// // 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않음
// if (rows > 10) {
// }

// // 값의 의미를 명확히 기술하여 가독성이 향상
// const MAXROWS = 10;
// if (rows > MAXROWS) {
// }
// 조건문 내의 10은 어떤 의미로 사용하였는지 파악하기가 곤란합니다.
// 하지만 네이밍이 적절한 상수로 선언하면 가독성과 유지 보수성이 향상됩니다.

// const는 객체에도 사용 가능합니다. 물론 이 때도 재할당은 안됩니다.

// const obj = { foo: 123 };
// obj = { bar: 456 }; // TypeError: Assignment to constant variable.
// 3.const와 객체
// const는 재할당이 금지됩니다. 이는 const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못한다는 것을 의미합니다. 하지만 이 때 객체의 프로퍼티는 보호되지 않습니다. 즉 재할당은 불가능하지만 할당된 객체의 내용(프로퍼티의 추가,삭제,값의 변경)은 변경할 수 있다는 뜻입니다.

// const user = { name: 'Lee' };

// // const 변수는 재할당이 금지
// // user = {}; // TypeError: Assignment to constant variable.

// // 객체의 내용은 변경가능
// user.name = 'Kim';

// console.log(user); // { name: 'Kim' }
// 객체의 내용이 변경되더라도 객체 타입 변수에 할당 주소 값은 변경되지 않습니다. 따라서 객체 타입 변수 선언에는 const를 사용하는 것이 좋습니다.
// 만약 명시적으로 객체 타입 변수의 주소 값을 변경(재할당)해야 한다면 let을 사용하는 것이 좋습니다.

