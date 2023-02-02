// for in 반복문
// 객체의 모든 키 순회
var student = {
       name : '유관순',
       age : 16,
       getInfo : function(){
              return `${this.name}(은)는 ${this.age}세 입니다.`;
       }
};

/*
   자바의 향상된 for문 처럼
   for(Member mem : memberList){}   
*/

for(var key in student){

       console.log(`key : ${key}`);
       console.log(`student[key] : ${student[key]}`);
};