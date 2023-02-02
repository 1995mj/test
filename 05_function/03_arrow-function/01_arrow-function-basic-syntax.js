/* arrow-function-basic-syntax */
/* 
    ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한
    방법으로 함수를 선언할 수 있다.
    화살표 함수는 항상 익명 함수로 정의한다.
*/


var message;

message = function(){
       return "Hello World";
}

console.log(message());

// function 키워드 생략가능
message = () => {
       return "Arrow Fuction!";
};

console.log(message());

// 명령문이 하나만 있을 때!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 명령문이 하나만 있는 경우 중괄호 생략이 가능하다.
// 이 때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환 된다.
// 고로 return 키워드 생략이 가능하다.
message = () => "Arrow Function are Simple!";

console.log(message());

// 매개변수가 있을 경우
message = (val1, val2) => "Arrow " + val1 + val2;
console.log(message('Function','!'));

// 매개변수가 하나면 소괄호 생략 가능
// 단, 매개변수가 없거나 여러 개일 경우 생략 불가하다.
message = val => "Arrow " + val;
console.log(message('Functions ar GOOD!!!'));