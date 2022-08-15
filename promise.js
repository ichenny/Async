"use strict";

// Promise is a JavaScript object
// state: pending -> fulfilled or rejected
//  - pending: promise가 만들어져서 지정한 operation이 수행중일 때
//  - fufilled : operation을 성공적으로 완료한 때
//  - rejected: 파일을 찾을 수 없거나 네트워크의 문제가 생겼을 때
// Producer vs Consumer
//  - 우리가 원하는 데이터를 제공하는 사람과 제공된 데이터를 사용하는 사람을 구분

// 1. Producer
// Promise는 class라서 new를 사용하여 object 생성
// 보통은 promise 안에서 heavy한 작업을 한다. 네트워크에서 데이터를 받아오는 작업은 시간이 오래걸릴 수 있다.
// 동기적으로 처리하는 경우에는 다음 라인의 코드가 실행되기까지 시간이 걸리기 때문에 비동기적으로 처리한다.
// 중요 ! when new Promis is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie"); // 기능을 성공적으로 잘 수행했어, resolve 함수를 호출, 네트워크 혹은 파일을 통해서 얻은 데이터를 resolve라는 콜백함수를 통해 전달한다.
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, cathch, finally
promise
  .then((value) => {
    //  값이 정상적으로 수행이된다면 값을 받아온다. value는 promise가 정상적으로 잘 수행이 되어서 resolve 콜백함수에 전달된 값이 들어온다.
    console.log(value);
  }) // then을 호출하면 Promise를 리턴한다.
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finally")); // 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 이 Promise는 1초 뒤에 1을 전달
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 계란`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

getHen()
  .then(getEgg) //.then((hen) => getEgg(hen))
  .then(cook)
  .then(console.log);
