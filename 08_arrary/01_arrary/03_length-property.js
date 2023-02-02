/* length property */

// length 프로퍼티는 요소의 개수를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([].length);
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr.push(6);        // push : 인자로 전달한 요소 추가
console.log(arr);
console.log(arr.length);

arr.pop();  // pop : 마지막 요소 제거
console.log(arr);
console.log(arr.length);

// length 프로퍼티에 임의의 숫자 값을 명시적으로 할당할 수도 있다.
// 현재 length 프로퍼티보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
arr.length = 3;
console.log(arr);        // [ 1, 2, 3 ]

arr.length = 10;
console.log(arr);        //  [ 1, 2, 3, <7 empty items> ]
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

const sparse = [, 2, , 4];
console.log(sparse);           // [ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(sparse.length);    // 4개 꼭 값이 있는 것이 아니라도 개수는 4

