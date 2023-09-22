// html 파일에 포함 시켜야지만 사용가능
//우선 html(document)에서 로그인 폼이라는 id를 찾고
//얻어온 로그인 폼정보에서 인풋과 버튼요소를 찾는다.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본동작인 초기화를 멈춤
    console.log(loginInput.value); // 사용자 입력값을 가져와줌
}

//submit의 이벤트 발생조건은 버튼을 누르거나 엔터를누르는 것이다.
loginForm.addEventListener("submit", onLoginSubmit);

 