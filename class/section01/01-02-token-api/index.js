// 좋은 예
function createTokenOfPhone(num) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  if (num.length < 10 || num.length > 11) {
    console.log("에러발생!!!");
    return;
  }

  // 2. 핸드폰 토큰 6자리 만들기
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  // 3. 핸드폰번호에 토큰 전송하기
}

// //안좋은 예
// function createTokenOfPhone(num) {
//   // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
//   if (num.length >= 10) {
//     if (num.length <= 11) {
//       // 2. 핸드폰 토큰 6자리 만들기
//       const result = String(Math.floor(Math.random() * 1000000)).padStart(
//         6,
//         "0"
//       );
//       // 3. 핸드폰번호에 토큰 전송하기
//       console.log(num + "번호로 인증번호" + result + "전송");
//     } else {
//       console.log("에러발생!!!");
//     }
//   } else {
//     console.log("에러발생!!!");
//   }
// }
