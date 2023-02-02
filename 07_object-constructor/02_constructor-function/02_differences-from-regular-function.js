/* differences from regular function(일반 함수와 차이점) */

function Student(name, age){
       this.name = name;
       this.age = age;
       this.getInfo = function(){
              return `${this.name}(은)는 ${this.age}세 입니다.`;
       }
}

/* 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다. 
   (생성자 함수는 첫 문자를 대문자로 기술하려고 노력했다.)

   new 연산자와 함께 호출하면 생성자 함수로 동작하는 것이다.
   만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.
*/

// 일반 함수로서 호출된 Student는 반환문이 없으므로 undefined를 반환
const student = Student(`강감찬`, 35);
console.log(student);

// 일반함수로서 호출된 Student내의 this는 전역객체를 가리킨다.
console.log(age);
console.log("==========================================")
/* 생성자 함수가 new 연산자 없이 호출 되는 것을 방지하기 위해 ES6에서는 new.target을 지원한다.
  
   new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
   그래서 new 연산자 없이 일반함수로 호출된 함수 내부의 new.garget은 undefined이다.
*/

function Dog(name, age){

       if(!new.target){
           return new Dog(name, age);   
       }
       this.name = name;
       this.age = age;
}

const dog = Dog('뽀삐', 3);
console.log(dog);

const obj = Object();
console.log(obj);
