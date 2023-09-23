// html 파일에 포함 시켜야지만 사용가능
//우선 html(document)에서 로그인 폼이라는 id를 찾고
//얻어온 로그인 폼정보에서 인풋과 버튼요소를 찾는다.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //자주 쓰는 스트링을 변수에 저장
const USERNAME_KEY = "username"; // 자주 쓰는 String은 변수화 시킴(오타에러 발생 방지)



function onLoginSubmit(event) { // 사용자 입력데이터를 받기 위해 event 매개변수생성 
    event.preventDefault(); //브라우저의 기본동작인 초기화를 멈춤
    loginForm.classList.add(HIDDEN_CLASSNAME);//버튼눌렀으니 로그인 폼 가리기
    const userName = loginInput.value; //유저 입력값(유저이름) value를 변수에 저장
    
    localStorage.setItem(USERNAME_KEY, userName); // 유저이름 브라우저에 저장하기
    paintGreetings(userName);
}

// 저장 데이터 활용해서 사용자에게 출력하기
function paintGreetings(abc){ 
    greeting.innerText = `안녕하세요  ${abc}님!`; // 저장내용 기록 
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 히든 풀기
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){ // 유저네임데이터가 하나라도 있으면 h1을보여주고, 하나도없으면 로그인폼을 보여줌
loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인 폼 보여주기
loginForm.addEventListener("submit", onLoginSubmit); //submit의 이벤트 발생조건은 버튼을 누르거나 엔터를누르는 것이다.
}else{
    paintGreetings(savedUserName);
}