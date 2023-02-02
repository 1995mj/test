/* 암묵적(묵시적) 타입 변환 */

console.log('==================== 문자열 타입으로 변환 =================')

// 문자열 연결 연산자로 동작
console.log(10 + '20');

// 템플릿 리터럴 표현식 삽입은 표현식의 결과를 문자열 타입으로 암묵적으로 변환
console.log('10 + 20 : ' + (10 + 20));

console.log(`10 + 20 : ${10 + 20}`)

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과
console.log(1 + '1');        // "1" (문자열)
console.log(NaN + '1');      // "NaN" (문자열)
console.log(Infinity + '');  // "Infinity"(문자열)
console.log(true + '');      // "true"(문자열)
console.log(null + '')       // "null"(문자열)
console.log(undefined + '')  // "undefined"(문자열)
// console.log(Symbol() + '');  // Cannot convert a Symbol value to a string(오류 Symbol 타입은 변환 불가!)
console.log({} + '');        // [object Object]
console.log([] + '');
console.log(function(){} + '');


