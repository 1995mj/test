/* 숫자 타입으로 변환 */
console.log("============================== 숫자 타입으로 변환 =================================")

/* 1. Number 생성자 함수를 new 연산자 없이 호출 */
console.log(Number('10'));  // 10
console.log(Number('10.01'));  // 10.01
console.log(typeof(Number('10'))); //타입 확인
console.log(Number(true));  // 1
console.log(Number(false)); // 0

/* 2.parseInt, parseFloat 함수 이용 (문자열 -> 숫자만 가능) */ 
console.log(parseInt('10'));
console.log(parseFloat('10'));
console.log(parseInt('10.01'));
console.log(parseFloat('10.01'));
console.log(parseInt('10a01'));
console.log(parseFloat('10a01'));

// parseInt는 자기가 표현할 수 있는거 까지 표현해줌 Number는 갖다 버림
console.log(Number('10A'));
console.log(parseInt('10A'));

/* 3. 산술 연산자 이용 */
console.log('10' * 1);
console.log(typeof('10' * 1));
console.log('10.01' * 1);
console.log(typeof('10.01' * 1));
console.log(true * 1); // 1
console.log(typeof(true * 1)); // 1
console.log(false * 1)
console.log(typeof(false * 1))
