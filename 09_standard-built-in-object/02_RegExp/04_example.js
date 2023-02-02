/* example */


// 1. 특정 단어로 시작하는지 검사하는 경우
// const url = 'https://www.google.com';
// const url = 'http://www.google.com';
const url = 'www.google.com';

// http:// 또는 https:// 로 시작하는지 검사
console.log(/^https?:\/\//.test(url));    // \ 붙여주기   ? 붙기 전 단어 있을 수도 있고 없을 수도 있다!

// 2. 특정 단어로 끝나는지 검사하는 경우
// const fileName = 'test.js';
const fileName = 'test.css';
console.log(/js$/.test(fileName));

// 3. 숫자로만 이루어진 문자열인지 검사
// const target = '12345';
const target = '12345@';

console.log(/^\d+/.test(target));      // d는 숫자 +는 여러개인지
console.log(/^\d+$/.test(target));      // 숫자로 끝나는지

// 4. 아이디로 사용 가능한지 검사
// 알파벳 대소문자 또는 숫자로 시작하고 6~12 자리인지 검사
const id1 = 'hello123';
const id2 = 'hello';
const id3 = 'hello안녕';
console.log('-------------------------------------');
console.log(/^[A-Za-z0-9]{6,12}$/.test(id1));
//                        ↑ 자릿수 6~12자리
console.log(/^[A-Za-z0-9]{6,12}$/.test(id2));     // 자릿수에서 걸림
console.log(/^[A-Za-z0-9]{6,12}$/.test(id3));     // 한글이여서 걸림 

// 5. 핸드폰 번호 형식에 맞는지 검사
const phone = '010-1234-5678';

console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(phone));

// 6. 특수문자 포함여부 검사
const target2 = 'hello#world';
// const target2 = 'helloworld';

console.log(/[^A-Za-z0-9]/gi.test(target2));