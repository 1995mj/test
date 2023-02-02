/*
     정적타입(static.strong type) 언어 (C, C++, Java, Kotlin 등)
     
     변수를 선언할 때 데이터 타입을 사전에 선언(명시적 타입 선언)해야한다.

     동적타입(dynamic/weak type) 언어(JavaScript, Python 등)
     자바스크립트 var, let, const 키워드를 사용해 변수를 선언할뿐 데이터 타입을 사전에 선언하지 않는다.
*/ 


//  typeof 연산자로 변수에 할당된 값의 데이터 타입을 반환한다.

var test;
console.log(typeof test);

//  변수 타입을 선언하지 않았는데 자동으로 인식해 타입을 정해줬음 = 동적타입
test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);

// 자바스크립트의 첫 번째 버전의 버그이지만 기존 코드에 영향을 줄 수 있어서 아직까지 수정되지 못함 (알고만 있을 것)
test = null;
console.log(typeof test);

test = Symbol();
console.log(typeof test);

test = {}; // 객체
console.log(typeof test);

test = []; // 배열
console.log(typeof test);

/* 메소드와 비슷하지만 반환형이 없음 알아서 척척 하니까 + 메소드를 변수에 담아서 사용 가능!*/ 
test = function(){};
console.log(typeof test);        


/*
    동적 타입 언어의 단점을 보완하기 위해서 변수 사용 시 유의할 점
    1. 변수는 꼭 필요한 경우에 한해 제한적으로 사용
    2. 변수의 유효 범위(스코프)를 최대한 좁게 만든다.    
    3. 전역 변수 지양
    4. 변수보다 상수를 사용해 값의 변경 억제
    5. 변수명을 통해 변수의 목적이나 의미를 파악할 수 있도록 한다.
*/
