// 함수(default property)의 프로토타입과 constructor 프로퍼티
// 개발자가 특별히 할당하지 않더라도 모든 함수는 기본적으로 "prototype"프로퍼티를 갖는다.
// default property의 "prototype"는 constructor 프로퍼티 하나만 있는 객체를 가리키는데,
// 여기서 constructor프로퍼티는 함수 자신을 가리킨다.

function Student() {}

console.log(Student.prototype.constructor == Student);

// 명시적으로 집어넣어줘도 스튜던드다!
Student.prototype = {constructor : Student};
console.log(Student.prototype.constructor == Student);

let student = new Student();       // {constructor : Student }을 상속받음
console.log(student.constructor == Student); // true ([[Prototype]]을 거쳐 접근한다.)


