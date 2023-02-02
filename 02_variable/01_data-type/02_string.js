/*
    02. 문자열 타입
    문자열 타입은텍스트 데이터를 나타내는데 사용한다.
    문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
    자바는 문자열을 객체로 표현하지만 자바스크립트의 문자열은 원시타입이며, 변경 불가능한 값이다.
    
*/

var string;
string = 'javaScript';
string = "javaScript";
string = `javaScript`;              

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식한다.';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식한다.";
console.log(string);

/*
   템플릿 리터럴
   ES6부터 도입된 멀티라인 문자열, 표현식 샵등의 편리한 문자열 처리 기능을 제공하는 문자열  표기법이다.
*/ 

/* 일반 문자열 내에서는 줄바꿈이 허용되지 않는다. */
// var str = '안녕하세요.
// 반갑습니다';

// 이스케이프 시퀀스를 사용
var str = '안녕하세요.\n반갑습니다.';
console.log(str);

// 백틱을 사용하면 줄바꿈이 허용되고 모든 공백이 있는 개드로 적용된다.
var multiLine = `안녕하세요.
반갑습니다.`;
console.log(multiLine);

var lastName = '홍';
var firstName = '길동';

console.log('제 이름은 ' + lastName + firstName + '입니다.');
// 표현식 삽입을 이용하면 문자열 연산보다 가독성 좋고 간편하게 문자열을 조합할 수 있다.
console.log(`제 이름은 ${lastName}${firstName}입니다.`);

// 표현식 삽입은 반드시 백틱 내에서 사용해야 한다.(↓ 좋지 않은 예 )
// 일반 문자열에서 표현식 삽입은 문자열로 취급한다.
console.log('제 이름은 ${lastName}${firstName}입니다.');