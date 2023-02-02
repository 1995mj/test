/* return 반환문 */

function hello(name) {
       // 반환문
       return `${name}님 안녕하세요!`;
       // 반환문 이후의 문은 실행되지 않고 무시된다.
       // 자바에서는 컴파일 오류였지만 자바스크립트에서는 오류가 뜨진 않음
       console.log(name);
}

console.log(hello('유관순'));

console.log("============================================")

function func(){

       console.log('함수가 호출되었습니다.');
       // 반환값을 명시적으로 지정하지 않으면 undefined가 반환된다.
       // 또는 반환문을 생략할 수도 있다. 이때도 암묵적으로 undefined를 반환한다.

       // return;
}

console.log(func());          // return; 주석 안했을때도 undefined!!