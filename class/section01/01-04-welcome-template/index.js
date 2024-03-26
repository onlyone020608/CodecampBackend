function getWelcomeTemplate({ name, age, school, createdAt }) {
  const mytemplate = `
  <html>
    <body>
      <h1>철수님 가입을 환영합니다!!!</h1>
      <hr />
      <div>이름: ${name}</div>
      <div>나이: ${age}</div>
      <div>학교: ${school}</div>
      <div>가입일: ${createdAt}</div>

    </body>
  </html>
  `;
}
const name = "철수";
const age = 12;
const school = "다람쥐초등학교";
const createdAt = "2020-10-10";

getWelcomeTemplate({ name, age, school, createdAt });
