// 단일주석
/* 여러줄 주석 */ 

// 정수, 실수, 음수 모두 숫자 타입이다.
// 자료형 변수명 = 값;
var integer = 10;
var double = 5.5;
var negative = -10;

console.log('integer : ' + integer);
console.log('double : ' + double);
console.log("negative : " + negative);

// 숫자 타입은 모두 실수로 처리된다. 같은 지 (타입까지)
console.log(10 === 10.0);
// 실수끼리의 나누기 이므로 소수점까지 처리된다.
console.log(10 / 4);

/*
   숫자타입은 추가적으로 세가지 특별한 값도 표현할 수 있다.
   Infinity : 양의 무한대
   -Infinity : 음의 무한대
   NaN : 산술 연산 불가(Not a Number)
*/ 

console.log(10 / 0);
console.log(-10 / 0);
console.log(1 * '문자열');