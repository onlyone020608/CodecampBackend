import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default
import 'dotenv'
export function checkPhone(myphone) {
  if (myphone.length < 10 || myphone.length > 11) {
    console.log("에러발생!!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}



export function createTokenOfPhone(myphone) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone);
  if (isValid == false) return;

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken)
}
export async function sendTokenToSMS(myphone, mytoken){
    const messageService = new mysms(process.env.SMS_API_TOKEN,process.env.SMS_API_TOKEN_PW)
    const res = await messageService.sendOne({
      to: myphone,
      from: "01028352839",
      text: `[코드캠프] 안녕하세요? 요청하신 인증번호는 ${mytoken} 입니다.`,
  })
  console.log(res)
}
;
