/* 논리 연산자
    ||(OR), &&(AND), !(NOT)의 논리연산자는 피연산자를 논리 연산한다. 
*/

//  OR AND 연산자 표현식의 결과는 때로는 boolean값이 아닐 수도 있다.
// OR의 경우 'apple'이 이미 Truthy 값이여서 true로 평가되고
// 논리 연산의 결과를 결정한 첫 번째 피연산자 apple을 그대로 반환한다.

console.log('apple' || 'banana');         // apple
console.log( false || 'banana');          // banana
console.log( 'apple' || false);          // apple


console.log('===========================================')
// AND의 경우 좌항과 우항 모두 확인해야 하므로

console.log('apple' && 'banana');       // banana
console.log(false && 'banana');         // false
console.log('apple' && false);          // false

// 단축평가를 사용하면 if문을 대체할 수 있다.
var num = 1;

if(num % 2 == 0) {
       console.log('짝수입니다.');
} else {
       console.log('홀수입니다.');
}

num % 2 == 0 && console.log('짝수입니다.');
num % 2 == 0 || console.log('홀수입니다.');

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고
// 프로퍼티를 참조할 때 단축평가를 유용하게 사용할 수 있다.
var obj = null;

// var val = obj.value;

var val = obj && obj.value;
console.log(val);