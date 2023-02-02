/* method
   자바스크립트의 함수(function)는 객체이다. 함수는 값으로 취급할 수 도 있고, 프로퍼티 값으로 사용할 수 있다.
*/

var dog = {

    name : '뽀삐',
    // method : 객체에 묶여 있는 함수
    eat : function(food){
        // this는 dog를 가르킨다.
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
};

dog.eat('밥');