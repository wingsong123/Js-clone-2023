const clock = document.querySelector("h2#clock"); // 요소를 html에서 가져오기

// 현재 시간을 출력하는 함수
function getClock(){
    const date = new Date(); // 날짜 함수를 변수에 저장
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; // 3개 요소 같이 보이게 문자열 합치기
}

getClock();// 현재시간을 즉시 호출
setInterval(getClock, 1000); // 현재 시간을 출력하는 함수를 호출하여 1초마다 반복
