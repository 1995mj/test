/* property-change-add-remove(프로퍼티 값 변경, 추가, 삭제) */

var dog = {
      name : '뽀삐'

};
// dog['age'] -> 문자열은 이렇게! 숫자는 그냥 ' 없이!!!!!!!!!!!!! 까먹지 말것
// 변경
// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
// dog.name = '두부';           // 됨 (표기방법만 달리)
dog['name'] = '두부';           // 됨
console.log(dog);

// 추가
// dog.age = 3;                  // 자동으로 추가해 줌!!!
dog['age'] = 3;
console.log(dog);

// 삭제
/*
   delete연산자는 객체의 프로퍼티를 삭제한다
   -> 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.
*/
// delete dog.age;            // 됨 (표기방법만 달리)
delete dog['age'];            // 됨 (표기방법만 달리)
console.log(dog);

// delete dog.something;      // 됨 (표기방법만 달리)
delete dog['something'];      // 됨 (표기방법만 달리) 
console.log(dog);

