/* function-leve-scope 함수 레벨 스코프 

   C, 자바 등 대부분의 프로그래밍 언어는 함수 몸체만이 아니라
   모든 코드 블럭(if, for, while, try/catch 등)이 지역 스코프를 만드는
   블럭 레벨(block level scope)를 가진다.

   하지만 var 키워드로 선언된 변수는 오로지 함수의 코드블럭(함수 몸체)만을 지역
   스코프로 인정하는 함수 레벨 스코프(function level scope)를 가진다.
*/

var i = 0;

for(var i = 0; i < 10; i++){}

console.log(i);      // 10이 나옴 (for문 꺼)

