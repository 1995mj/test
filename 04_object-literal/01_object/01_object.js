/* 
    Object(객체)
    자바스크립트는 객체 기반 프로그래밍 언어
    원시값을 제외한 나머지값(함수, 배열, 정규표현식 등)은 모두 객체이다.

    객체는 0개 이상의 프로퍼티로 구성된 집합이며 프로퍼티 키(key)와 값(value)로 구성된다.
    자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
    프로퍼티 값이 함수일 경우 method라고 부른다.
*/

/* 
   객체 생성 방법
   자바, C++ 같은 클래스 기반 객체 지향 언어는 클래스를 사전에 정의하고 (자바는 new 썼었음)
   필요한 시점에 new 연산자와 함께 생성자를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성

   자바스크립트는 프로토타입 기반 객체지향 언어로 클래스 기반 객체 지향언어와는 달리 다양한 객체 생성 방법을 지원한다.

   1. 객체 리터럴    (값)
   2. Object 생성자 함수
   3. 생성자 함수
   4. Object.create 메소드
   5. Class(ES6)
*/

var student = {

       // 키 - 값 쌍으로 구성된 프로퍼티
       // 프로퍼티 : 객체의 상태를 나타내는 값(data)
       // { name: '유관순', age: 16 }
       //    ↑키    ↑밸류   ↑키  ↑밸류
       name : '유관순',
       age : 16,
       // method : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
       getInfo : function(){
              return `${this.name}(은)는${this.age}세입니다.`;
              //        ↑ student 객체를 가르킴(this)
       }
}
;

console.log(typeof student);
console.log(student);
console.log(student.name);
console.log(student.getInfo());

console.log("===========================================")


var student2 = {};

console.log(typeof student2);
console.log(student2);

/* 객체 리터럴의 중괄호는 코드블록을 의미하지 않는다. 따라서 닫는 중괄호 뒤에는 세미콜론을 붙인다. */