/* differences from regular array

   일반적인 의미의 배열은 각 요소가 동일한 데이터 크기를 가지며,
   빈틈없이 연속적으로 이어져 있어 인덱스를 통해 임의의 요소에 한번에 접근할 수 있는 고속 동작을
   장점으로한다. 하지만 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸
   특수한 객체로 각각의 메모리 공간이 동일한 크기를 갖지 않아도 되고 연속적으로 이어져 있지
   않은 수 있다.

   인덱스를 나타내는 문자열을 프로퍼티 키로 가지고, length 프로퍼티를 갖는 특수한 객체이다.

   프로퍼티 플래그
   객체 프로퍼티는 값(value)과 함께 플래그(flag)라 불리는 특별한 속성 세가지를 가진다.
   writeable - true이면 값을 수정할 수 잇다. 그렇지 않다면 읽기만 가능하다.
   enumerable - true이면 반복문을 사용해 나열 할 수 있다. 그렇지 않다면 반복문을 사용해 나열 할 수 없다.
   configurable - true이면 프로퍼티 삭제나 플래그 수정이 가능하다.
                  그렇지 않으면 프로퍼티 삭제나 플래그 수정이 불가능하다.
*/

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

const arr = [
       '홍길동',
       20,
       true,
       null,
       undefined,
       NaN,
       Infinity,
       [],
       {},
       function(){}
];

console.log(arr);
