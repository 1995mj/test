/* global object

   전역객체(global object)는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
   어떤 객체에도 속하지 않는 최상위 객체

   Node.js 환경에서는 global이 전역객체, 브라우저 환경에서는 window가 전역 객체
*/

// Infinity : 무한대를 나타내는 숫자값
console.log(global.Infinity === Infinity);

console.log(10 / 0);      // Infinity

console.log(-10 / 0);     // -Infinity

// NaN : 숫자가 아님(Not a Number)
console.log(global.NaN);
console.log(Number('abc'));
console.log(10 * 'abcf');

// undefined : 원시 타입 undefined
console.log(global.undefined);
let nothing;
console.log(nothing);