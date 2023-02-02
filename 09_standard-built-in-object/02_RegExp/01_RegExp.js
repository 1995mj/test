/* RegExp
   정규표현식(Regular expression)은 일정한 패턴을 가진 문자열의 표현하기 위해 사용하는 형식 언어이다. 
*/


// 정규 표현식 생성


const target = 'JavaScript'; // 검색 대상

// 정규 표현식 리터럴 - /pattern/플래그
let regexp = /j/i;  // 패턴 : j, 플래그 : i => 대소문자 구별없이
// let regexp = /j/;     = i 빼면 false가 나온다  

// RegExp 생성자 함수 - new RegExp(pattern[, flag])
regexp = new RegExp('j', 'i');
regexp = new RegExp(/j/, 'i');
RegExp = new RegExp(/j/i);   // ES6부터 가능한 표현

// test메소드 -> target 문자열에 대해 정규 표현식 regxp의 패턴을 검색하여 매칭 결과를 boolean 값으로 반환
console.log(regexp.test(target));