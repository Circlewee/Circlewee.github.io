const quotes = [
  {
    quotes: "움직이는 사람만이 넘어질 수 있다.",
    author: "로베르토 고이주에타",
  },
  {
    quotes: "가장 위대한 예술가도 한때는 초심자였다.",
    author: "파머스 다이제스트",
  },
  {
    quotes: "무엇을 시도할 용기도 없으면서 멋진 삶을 바란단 말인가.",
    author: "반 고흐",
  },
  {
    quotes: "당신이 잠자리에서 일어나든 안 일어나든 하루는 시작된다.",
    author: "존 차디",
  },
  {
    quotes: "인생에서 가장 의미없이 보낸 날은 웃지 않고 보낸 날이다.",
    author: "E.E.커밍스",
  },
  {
    quotes: "처음부터 겁먹지 마요. 막상 가보면 아무것도 아니니까",
    author: "김연아",
  },
];

// const jsonQuotes = JSON.parse(JSON.stringify(quotes));
// console.log(jsonQuotes);

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quotes}"`;
author.innerText = `- ${todayQuote.author}`;
