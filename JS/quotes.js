const quotes = [
    {
    quote: '오늘 먹을 치킨을 내일로 미루지 마라.',
    author: '송재희'
    },
    {
    quote: '세상아 덤벼라.',
    author: '송재희'
    },
    {
    quote: '어제 먹은 치킨 오늘 먹어도 맛있다.',
    author: '송재희'
    },
    {
    quote: '만약 너가 돈이 있다면 치킨을 사먹어라.',
    author: '송재희.'
    },
    {
    quote: '세상은 치킨, 돈, 그리고 양념치킨이 전부다.',
    author: '송재희'
    },
    {
    quote: '치킨이 당당해지면?..... 당당치킨.',
    author: '송재희'
    },
    {
    quote: '세상에서 가장 대단한 할아버지는? KFC 할아버지.',
    author: '송재희'
    },
    {
    quote: '당신이 힘들다면, 치킨을 못먹었기 때문이다.',
    author: '송재희'
    },
    {
    quote: '여보 치킨 사왔어.',
    author: '송재희'
    },
    {
    quote: '두려워 말고 도전하자. 내일의 내가 치킨을 먹는다.',
    author: '송재희'
    },
    ];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 




function getQuote(){
    // quotes오브젝트의 개수만큼 랜덤해서 돌아가는 기능
    // 1.5가 나오면 1로 출력하는 것처럼 소숫점을 버리고 출력함
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;
}




getQuote(); // 첫 명언 출력
setInterval(getQuote, 3000); // 3초에 한번씩 반복
