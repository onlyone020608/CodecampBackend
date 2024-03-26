// 구조분해할당 예제

// // 2. 객체 전달하기
// function zzz(aaa) {
//   // const aaa = basket
//   console.log(aaa);
// }

// const basket = {
//   apple: 3,
//   banana: 10,
// };

// zzz(basket);

// 3. 객체 전달하기 => 구조분해할당 방식으로 전달하기
function zzz({ apple, banana }) {
  // const {apple, banana} = basket
  console.log(apple, banana);
}

const basket = {
  apple: 3,
  banana: 10,
};

zzz(basket);
