"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoising = 호이스팅이 된 이후부터 작성된 순서대로 코드가 실행된다
// hoisting: var, function declaration  선언이 제일 위로 올라감

// setTimeOut
// - 브라우저에서 제공하는 API
// - 지정한 시간이 지나면 콜백함수를 실행한다.
// - setTimeOut(콜백함수, 시간)
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

//synchronous callback
function printImmediately(print) {
  print();
}
// 함수에 대한 설명
// - printImmediately라는 함수는 매개변수로 함수를 받고 그 함수를 실행하는 함수이다.
// - 쉽게 이해하자면 print라는 함수를 인자로 받으면 print 함수를 바로 실행한다.

printImmediately(() => console.log("Hello"));
// () => console.log("Hello")는 함수이다.
// 함수를 바로 실행
// Hello가 출력된다.

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);
