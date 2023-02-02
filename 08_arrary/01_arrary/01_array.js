/* array
   : 배열은 여러 개의 값을 순차적으로 나열한 자료구조이다.
*/

// 1. 배열 리터럴을 통해 배열 생성
// 배열이 가지고 있는 값을 요소라 부르며 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.
const arr = ['바나나', '복숭아', '키위'];
console.log(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

// 전달된 인자가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성
const arr3 = new Array(10);
console.log(arr3);                // [ <10 empty items> ]

// 인자가 숫자 1개이면 그만한 크기의 배열을 만들지만 여러 개 가 들어가면 그 값을 가진 배열을 만든다.
const arr4 = new Array(1, 2, 3);
console.log(arr4);               // [ 1, 2, 3 ]

console.log("==========================================================")
// 3. Array.of 메소드
// 전달 된 인수를 요소로 갖는 배열을 생성
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 'js'));

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용된다.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
       console.log(arr[i]);
}

console.log(typeof arr);

