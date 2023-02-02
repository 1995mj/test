/* 빌트인 전역 함수 */

// isFinite
/* 
   전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false반환
   전달받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사를 수행하며, NaN으로 평가되는 값이면 false를 반환
*/

console.log(isFinite(10));
console.log(isFinite('10'));
console.log(isFinite(null));     // true 무한 수는 아니기 때문에?

console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

console.log(isFinite(NaN));
console.log(isFinite('abc'));
console.log('===================================');

// isNaN
// 전달받은 인수가 NaN인지 검사하여 그 검사 결과를 boolean 타입으로 반환
// 전달받은 인수가 숫자가 아닌 경우 숫자로 타입 반환 후 검사를 수행

console.log(isNaN(NaN));          // true
console.log(isNaN(10));           // false

console.log(isNaN('abc'));        // true    'abc' 숫자형으로 바꾸면 NaN이 됨
console.log(isNaN('10'));         // false   문자열 10 → 숫자형 10 
console.log(isNaN(''));           // false ('' -> 0) 빈 문자열은 0으로 바뀜

console.log(isNaN(true));         // false (true -> 1)
console.log(isNaN(false));        // false (false -> 0)

console.log(isNaN(undefined));    // true
console.log("===========================================")

// parseFloat : 전달받은 문자열 인수를 부동 소수점 숫자, 실수로 해석하여 반환

console.log(parseFloat('10.01')); // 10.01
console.log(parseFloat('10')); // 10

// 공백으로 구분 된 문자열은 첫번재 문자열만 반환
console.log(parseFloat('10 20 30'));
// 앞뒤 공백은 무시
console.log(parseFloat('             1004         '));
// 숫자가 아닌 문자열은 제외하고 반환
console.log(parseFloat('10cm'));
// 첫 번째 문자열을 숫자로 반환할 수 없다면 변환 불가
console.log(parseFloat('GS25'));

console.log("=======================================================")
// parseInt : 전달받은 문자열 인수를 정수로 해석하여 반환
console.log(parseInt('10'));
console.log(parseInt('10.01'));

// Number() : 넘버는 10A 이면 그냥 버림 (NaN)
// parseInt() : 10A면 자기가 할 수 있는 만큼 10으로 표현
// parseFloat() : 10A면 자기가 할 수 있는 만큼 10으로 표현



// encodeURI
// URI(인터넷에 있는 자원을 나타내는 유일한 주소)를 문자열로 전달받으 이스케이프 처리를 위해 인코딩한다.
const uri = 'http://greedy.com?name=홍길동&job=student';
const enc = encodeURI(uri);


console.log(enc);
// http://greedy.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99&job=student 한글 홍길동이 이렇게 바뀜

// decodeURI
// 인코딩된 URI를 인수로 전달 받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);

// encodeURIComponent
// URI 구성요소를 인수로 전달받아 알파벳, 0~9의 숫자, - _ . ! ~ * ' () 은 제외하고 인코딩한다.
// 쿼리스트링(?name=홍길동&job=student)
const uriComp = 'name=홍길동&job=student';
const encComp = encodeURIComponent(uriComp);
console.log(encComp);

// decodeURIComponent

const decComp = decodeURIComponent(encComp);
console.log(decComp);
 



