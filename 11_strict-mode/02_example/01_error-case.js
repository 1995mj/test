// 에러 상황

// 1. 암묵적 전역
(function () {
     //'use strict';

     // 선언하지 않은 변수를 참조하면 에러가 발생한다.
     x = 1;
     console.log(x);
       
}());

// 2. 변수, 함수, 매개변수의 삭제
(function () {
     
       // 'use strict';
       var x = 1;
       // delete 연산자로 변수, 함수, 매개변수를 삭제하면 문법 에러가 발생
       delete x;     // strict모드에서는 식별자에 대해 delete를 호출할 수 없다.
}());

// 3. 매개변수 이름의 중복
// 동일변수에 1, 2를 넣었으면 두번째꺼로 덮어씌워짐
// 'use strict' 하면 아예 오류로 막아버림
(function () {
     
       // 'use strict';
       function test(x, x) {
              
              return x + x;
       }

       console.log(test(1, 2));
}());

// 4. with문의 사용
(function() {
       // 'use strict';
       with({ x : 1}) {     // 'with'문은 strict모드에서 사용할 수 없다.
              console.log(x);

       }
}());
