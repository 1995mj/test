/* RegExp-method */
const target = 'Java JavaScript';

// exec
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환
console.log(/va/.exec(target));
console.log(/va/g.exec(target)); // 문자열 내의 모든 패턴을 검색하는 g플래그를 지정(단 첫번째 매칭 결과만 반환)
console.log(/hello/.exec(target)); // 매칭 결과가 없을 경우 null 반환

console.log("==========================================")

// test
// 인수로 전달받은 문자열에 대해 정규표현식의 패턴을 검색하여 매칭 결과를 boolean으로 반환
console.log(/va/.test(target));
console.log(/hello/.test(target));

console.log("==========================================")

// match
// String 표준 빌트인 객체가 제공하는 메소드로 대상 문자열과 인수로 전달받은 정규표현식과의 매칭결과를 배열로 반환
console.log(target.match(/va/));
console.log(target.match(/va/g));      // [ 'va', 'va' ]
console.log(target.match(/hello/));    // null