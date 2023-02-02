/* recursive-function(재귀함수) 
   함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.
   재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해서 사용한다.
*/

// n! = 1 * 2 * ..... *(n-1) * n;
function factorial(n) {

       if(n <= 1) return 1; // 종료시점을 위해서 조건을 추가 : n이 1이하일 때 재귀호출을 멈춘다.

       // 재귀호출
       return n * factorial(n - 1);
}
// 디버깅으로 확인 해보기 (세부 사항 보기도 있음)
console.log(factorial(1));
console.log(factorial(5));

/* 재귀함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 있지만
   무한 반복에 빠질 위험이 있고 이로 인해 스택 오버플로 에러를 발생시킬 수 있으므로 주의한다.
   반복문보다 재귀함수 사용이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다.
*/
