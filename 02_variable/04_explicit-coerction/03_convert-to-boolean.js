/* boolean 타입으로 변환 */
console.log("=============== 논리 타입으로 변환 ==============");


// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('javaScript')); // true
console.log(Boolean(''));           // false
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false
console.log(Boolean(NaN));          // false 부정 타입이여서!
console.log(Boolean(Infinity));     // true
console.log(Boolean(-Infinity));    // false 음수던 양수던 true!!
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean({}));           // true    객체
console.log(Boolean([]));           // true

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
// 2. ! 부정 논리 연산자
console.log(!'javascript');        // false
console.log(!!'javascript');       // true         (부정 + 부정 = 긍정)
console.log(!1);                   // false
console.log(!!1);                  // true
console.log(!!0);                  // false
console.log(!!NaN);                // false
console.log(!!Infinity);           // true
console.log(!!null);               // false
console.log(!!undefined);          // false
console.log(!!{});                 // true
console.log(!![]);                 // true

