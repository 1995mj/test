/* 
    
     Symbol 타입
     심벌은 ES6에서 추가 된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
     다른 값과 중복되지 않는 유일무이한 값으로 충돌할 위험이 없는 객체의 유일한 프로퍼티(속성) 키를 만들기
     위해 사용한다.     
*/

// Symbol 값 생성  자바의 map과 비슷
var key = Symbol('key');
console.log(typeof key);
console.log(typeof 'key');

// 객체 생성 (key , value 값으로 형성되어 있음)
var obj = {};

//   ↓여기에   ↓이걸 넣겠다.
obj[key] = 'value';

console.log(obj);
console.log(obj[key]);

/* 
   자바스크립트의 데이터 타입은 크게 원시타입과 객체 타입으로 분류한다.
   자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체이다.
   number, string, boolean, undefined, null, symbol 6가지 데이터 타입 이외의 값은 모두 객체 타입이다.
*/
