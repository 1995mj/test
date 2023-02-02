/* nullish-colalescing-operator(null 병합 연산자) 
   ES11에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경운
   우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
   -> 변수에 기본값을 설정할 때 유용하다.
*/
var test = null ?? '기본값';
console.log(test);

// null 병합 연산자는 이전에는논리연산자 ||를 사용한 단축평가로 변수에 기본값을 설정했다.
// -> 빈 문자열과 같은 Falsy값을 false로 취급해서 문제가 생김
// --> 빈 문자열도 유효하게 처리하고 싶지만 기본 값 문자열이 대입된다.
//       빈 공간은 Falsy로 인식해서!
// var value = '' || '기본값';
// console.log(value);

var value = '' ?? '기본값';
console.log(value);