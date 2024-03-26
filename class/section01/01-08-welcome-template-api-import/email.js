export function checkEmail(email) {
  if (email === undefined || email.includes("@" === false)) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school, createdAt }) {
  const mytemplate = `
  <html>
    <body>
      <h1>${name}님 가입을 환영합니다!!!</h1>
      <hr />
      <div>이름: ${name}</div>
      <div>나이: ${age}</div>
      <div>학교: ${school}</div>
      <div>가입일: ${createdAt}</div>

    </body>
  </html>
  `;
  return mytemplate;
}

export function sendTemplate(myemail, mytemplate) {
  console.log(myemail + "이메일로 템플릿" + mytemplate + "을 전송합니다.");
}
