// 배열 고차함수
// * 고차 함수 : 함수를 인수로 전달 받거나 함수를 반환하는 함수

// sort : 배열을 정렬 기준으로 정렬
let numbers = [];

for(let i = 0; i < 10; i++){

     numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 전 numbers : ${numbers}`);

/*
    오름차순 정렬이 기본이며 정렬 후 정렬 순서를 유지한다.
    배열은 기본적으로 문자열 정렬이 되므로 한 자리수, 세자리수가 올바르지 않게 정렬되는 모습을 확인할 수 있다.
    --> 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달
*/
numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);

let numbers2 = [11, 111, 22, 33];
console.log(numbers2.sort());

// 숫자 오름차순 정렬
function compare(a, b) {
       if(a > b) return 1;
       if(a == b) return 0;
       if(a < b) return -1;
}

numbers2.sort(compare);
console.log(`매개변수로 compare 함수 전달하여 숫자 오름차순 정렬`);
console.log(numbers2);

// 숫자 내림차순 정렬
// numbers2.sort(function(a, b){
//      return b - a;
// });

numbers2.sort((a, b) => b - a);        // ArrowFunction 사용 축약 버전(한줄 일 때만)

console.log('숫자 내림차순 정렬');
console.log(numbers2);

console.log("======================================================")

/*
   참고
   함수형 프로그래밍 : 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여
   복잡성을 해결하고 변수의 사용을 억제하여 상태변경을 피하려는 프로그래밍 패러다임

   for문은 반복을 위한 변수선언, 조건식, 증강식 등이 필요하여 함수형 프로그램이 추구하는 바와 맞지 않는다.
   for를 대체할 수 있는 고차함수로 forEach메소드가 있다.

   배열.forEach(function(item. index, array){
         // 배열 요소 각각에 실행할 기능 작성
   });
*/

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, array){

      console.log(`item : ${item}`);
      console.log(`index : ${index}`);
      console.log(`array : ${array}`);

});
console.log("================================");



// 각 요소 별로 * 10 한 값을 콘솔에 출력
numbers.forEach(item => console.log(item * 10));

// map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환값들로 구성된 새로운 배열 반환
/*  
   배열.map(function(item, index, array){
         // 배열 요소 각각에 반환할 새로운 값
   });
*/

const types = [true, 1, 'text'].map(item => typeof item);
console.log(`type : ${types}`);

const lengths = ['apple', 'banana', 'cat', 'dog'].map(item => item.length);
console.log(`lengths : ${lengths}`);

// filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환값이 true인 요소로만 구성된 새로운 배열 반환
const odds = numbers.filter(item => item % 2);
console.log(odds); // 1, 2, 3, 4, 5 => 1(1) 0 1(3) 0 1(5)