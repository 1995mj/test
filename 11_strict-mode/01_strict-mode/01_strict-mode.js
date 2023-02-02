// 엄격모드
// 전역의 선두에 추가하면 스크립트 전체에 strict mode 가 적용된다.


'use strict'              //  ← 이걸 걸어주면 오류발생 (엄격모드 on)
function test(){
       'use strict'; // 함수 body의 선두에 추가하면 해당 함수와 중첩 함수에 대해서 strict mode가
       // 앞에 자료형을 선언해주지 않으면 전역변수처럼 된다.
       // 암묵적으로 전역변수가 된다.
       x = 10;

      // 'use strict'  // 코드의 선두에 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.
}

test();

console.log(x);

// 원래 자료형을 선언하지 않고 x = 10; 하면 전역변수


// 서드파티 라이브러리가 non-strict mode인 경우 즉시 실행함수로
// 스크립ㅁ트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.
(function() {
       'use strict'

}());





/**
 *                          <script>
 *                          'use strict'
 *                          </script>
 * 
 * 
 *                          <script>
 *                          
 *                          </script>
 * 
 *  이렇게하면 위에꺼에만 엄격모드 적용 됨
 */




