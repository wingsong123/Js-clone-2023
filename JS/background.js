const images = ["치킨1.png","치킨2.jpeg"];


const chsenImage = images[Math.floor(Math.random() * images.length)];

//이미지 생성하는 변수선언
const bgImage = document.createElement("img");

bgImage.src = `img/${chsenImage}`; // 소스 지정

document.body.appendChild(bgImage);// html의 body부분에 촤일드(요소)추가