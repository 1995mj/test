// [[Prototype]]
// 자바스크립트의 객체는 [[Prototype]]이라는 숨김 프로퍼티를 갖는다
// 이 프로퍼티 값은 null이거나 다른 객체에 대신 참조가 되는데, 다른 객체를 참조하는 경우
// 참조 대상을 프로토타입(prototype)이라 부른다.

// object에서 프로퍼티를 읽으려 할 때 해당 프로퍼티가 없으면 자바스크립트는 자동으로 프로퍼티타입에서
// 프로퍼티를 찾는다. 이것을 프로토타입 상속이라 한다.

const user = {

       activate: true,
       login: function(){
              console.log('로그인 되었습니다.');
       }
};

const student = {
       passion: true
};

// __proto__는 [[Prototype]]의 getter, setter이다.
// 요즘에는 잘 사용하지 않지만 호환을 위해서 남아있으면 직관적인 이해를 돕기 위해 여기서 사용
// 함수 Object.getPrototypeOf나 Object.setPrototypeOf를 써서 프로토타입을 get, set하는 것이 좋다.
console.log("passion: " + student.passion);
student.__proto__ = user;
console.log(student.activate);

student.login()

// student의 프로토타입은 user이다. 혹은 student는 user를 상속받는다.
// 프로토타입에서 상속받은 프로퍼티를 '상속 프로퍼티(inherited property)'라고 한다.

// 프로토타입 체인
const greedyStudent = {

       class: 11,
       __proto__: student
};

console.log(greedyStudent.activate);      // user에서 상속
console.log(greedyStudent.passion);        // student에서 상속

// 프로토타입 체이닝은 순환 참조가 허용되지 않는다
// __proto__의 값은 객체 또는 null만 가능하며 다른 자료형은 무시된다.

