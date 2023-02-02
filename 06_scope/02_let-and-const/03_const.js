/* 
   const

   const키워드는 상수(constant)를 선언하기 위해 사용한다.
*/

// const키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다!!!!!!!
// const x;      안된다.
const x = 1;

/* 
   상수 : 재할당이 금지된 변수
   const 키워드로 선언된 변수에 원시 값을 할당하면 원시 값은 변경할 수 없는 값이고
   const 키워드에 의해 재할당이 금지되므로 할당 된 값을 변경할 수 있는 방법은 없다.

   변수명선언은 일반적으로 대문자로 선언해 상수임을 명확히 나타내며
   여러 단어로 이루어진 경우 언더스코어(_)로 구분해서 스네이크 케이스로 표현하는 것이 일반적이다.
*/
// memberName = 카멜 케이스      MEMBER_NAME    스네이크 케이스

const DISCOUNT_RATE = 0.15; // 할인율

// 정가
let price = 15000;

// 할인가
let discountPrice = price * (1 - DISCOUNT_RATE);

console.log(discountPrice);

/* const키워드로 선언 된 변수에 객체를 할당할 경우 값을 변경할 수 있다. */
const student = {
       name : '홍길동',
       age : 20
};

student.name = '유관순';
student.gender = '여';
console.log(student);

// 재할당은 불가하다. (객체를)
// student = {};               // Assignment to constant variable