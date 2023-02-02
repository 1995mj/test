/* 숫자 타입으로 변환 */
console.log("================= 숫자 타입으로 변환 =====================")

// 산술 연산자 피연산자는 모두 숫자여야하므로
// 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적으로 타입 변환한다.
// + 는 안됨
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');
console.log(10 % 'javascript');   // NaN 피연산자 숫자 변환 불가로 연산 수행 불가

// 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로
// 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 > '5');
console.log(10 > 'javascript');     // false가 나옴 (타입이 boolean 이여서(비교연산자))
console.log("-------------------------------------------------------------")
// + 단항연산자는 피연산자가 숫자 타입의 값이 아ㅣ면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');    // 0
console.log(+'1');   // 1
console.log(+'javascript'); // NaN
console.log(+true);   // 1 (정해져 있는 값임)
console.log(+false);  // 0 (정해져 있는 값임)
console.log(+undefined); // NaN
// console.log(+Symbol()); // TypeError: Cannot convert a Symbol value to a number
console.log(+{});  //NaN
console.log(+[]);  // 0
console.log(+function(){}); // NaN

// 빈 문자열, 빈 배열, null, false는 0으로
// true는 1로
// 객체와 undefined, function()는 변환되지 않아 NaN

