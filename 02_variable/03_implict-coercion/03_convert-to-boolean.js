/* boolean 타입 변환 */
console.log("---------------- 논리 타입으로 변환 --------------------")

// 자바스크립트 엔진은 boolean타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
if(true) console.log("if(true)");
if(false) console.log("if(false)");   // 실행될 일이 없으니 어둡게 표현 후 실행도 안됨
if(undefined) console.log("if(undefined");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('javascript') console.log("if('javascript')");

// Truthy : Falsy 이외의 값 '~~~~'
// Falsy 타입의 값 : false, undefined, null, 0, NaN, ''

