
import nodemailer from 'nodemailer'
export function checkEmail(email) {
  if (email === undefined || email.includes("@" === false)) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const mytemplate = `
  <html>
    <body>
      <div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <h1>${name}님 가입을 환영합니다!!!</h1>
          <hr />
          <div style="color: blue;">이름: ${name}</div>
          <div>나이: ${age}</div>
          <div>학교: ${school}</div>
        </div>  
      </div>
    </body>
  </html>
  `
  return mytemplate;
}

export async function sendTemplate(myemail, mytemplate) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlyone.won0608@gmail.com",
      pass: "nnmmounttmxnpmkr",
    }
  })  
  
  const result = await transporter.sendMail({
    from: "onlyone.won0608@gmail.com",
    to: myemail,
    subject: "[코드캠프] 가입을 축하합니다!!!",
    html: mytemplate

  })
  console.log(result)
  
  
  //console.log(myemail + "이메일로 템플릿" + mytemplate + "을 전송합니다.");
}
