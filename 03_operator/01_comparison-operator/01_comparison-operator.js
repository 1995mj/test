/* 기본적이 연산자의 사용은 Java와 다르지 않다 */

/* 비교연산자
   비교 연산자는 좌항과 우항 ex).10 > 5) 의 비교연산자를 비교한 다음 그 결과를 boolean 값으로 반환
   -> if 문이나 for문과 같은 제어문의 조건식에 주로 사용한다.
 */

/* 
    동일/일치 비교 연산자
    동등 비교(loose equlity) 연산자와 일치 비교(strict equality) 연산자는 비교하는
    엄격성의 정도가 다르다.   
    동등 비교(==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
    일치 비교(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.

*/

console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

// 숫자 0, 문자 '0`
console.log(`0 == '0' : ${0 == '0'}`);
console.log(`0 == '' : ${0 == ''}`);
console.log(`0 == false : ${0 == false}`);
console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === '' : ${0 === ''}`);
console.log(`0 === false : ${0 === false}`);

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN
// 자신과 일치하지 않는 유일한 값
console.log(`NaN == NaN : ${NaN == NaN}`);      // 둘이 같은 값이지만 다르다고 나옴 (일반적인 비교 연산으로는 사용 불가)
console.log(`NaN == NaN : ${NaN === NaN}`);      // 둘이 같은 값이지만 다르다고 나옴 (일반적인 비교 연산으로는 사용 불가)

// 빌트인 함수 Number.isNaN을 사용
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

/* 비교 연산자를 통해 문자열끼리 비교도 가능하며 유니코드 순으로 비교한다. */
console.log('=================================================')
console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);
//  A = 65 a = 97
console.log(`a > b : ${'a' > 'b'}`);
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);
console.log(`'cat' <= 'Zoo' : ${'cat' <= 'Zoo'}`);
