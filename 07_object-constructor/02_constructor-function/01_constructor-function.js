/* constructor-function(생성자 함수) */

// 객체 리터럴에 의한 객체 생성
const student1 = {
       name : '유관순',
       age : 16,
       getInfo : function(){
              return `${this.name}(은)는 ${this.age}세 입니다.`;
       }
};

const student2 = {
       name : '홍길동',
       age : 20,
       getInfo : function(){
              return `${this.name}(은)는 ${this.age}세 입니다.`;
       }
};

/* 생성자 함수에 의한 객체 생성
   객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한
   객체 여러 개를 간편하게 생성할 수 있다.
*/
function Student(name, age){
       // 1. 암묵적으로 인스턴스가 생성되고, this에 바인딩 되는 과정이 런타임 이전에 실행된다.
       console.log(`this 확인 : ${this}`);
       // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
       // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
       // this는 new student('장보고', 30)의 주소값을 가리킨다.
       this.name = name;
       this.age = age;
       this.getInfo = function(){
              return `${this.name}(은)는 ${this.age}세 입니다.`;
       }

       // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.

       // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
       // return 1;
       // 생성자 내부에서 return은 생략하는 것이 기본이다.
}

// 인스턴스 생성
const student3 = new Student('장보고', 30);
const student4 = new Student('신사임당', 40);

console.log(student3.getInfo());
console.log(student4.getInfo());