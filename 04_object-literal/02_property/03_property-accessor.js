/* property-accessor(프로퍼티 접근) */

var dog = {
       name : '뽀삐',
       eat : function(food){
              console.log(`${this.name}(은)는 ${food}을 맛있게 먹어요.`);
       }
};

// 마침표 표기법(dot notation)
console.log(dog.name);
dog.eat('밥');

// 대괄호 표기법(square bracket notation)
// console.log(dog[name]); // 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용한다.
console.log(dog['name']);
dog['eat']('고구마');

var obj = {
       'dash-key' : 'dash-value',
       0 : 1
};

// console.log(obj.dash-key);                   // 안됨
// console.log(obj.'dash-key');                 // 안됨
// console.log(obj[dash-key]);                  // 안됨
console.log(obj['dash-key']);

// console.log(obj.0);
// console.log(obj.'0');

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
console.log(obj[0]);                           // 됨
console.log(obj['0']);                         // 명시적으로 확인하기 위해!