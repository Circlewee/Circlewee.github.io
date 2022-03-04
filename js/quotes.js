const quotesList = [
  {
    quote: "움직이는 사람만이 넘어질 수 있다.",
    author: "로베르토 고이주에타",
  },
  {
    quote: "가장 위대한 예술가도 한때는 초심자였다.",
    author: "파머스 다이제스트",
  },
  {
    quote: "무엇을 시도할 용기도 없으면서 멋진 삶을 바란단 말인가.",
    author: "반 고흐",
  },
  {
    quote: "당신이 잠자리에서 일어나든 안 일어나든 하루는 시작된다.",
    author: "존 차디",
  },
  {
    quote: "인생에서 가장 의미없이 보낸 날은 웃지 않고 보낸 날이다.",
    author: "E.E.커밍스",
  },
  {
    quote: "모든 것을 알고 있다고 생각하지말자.",
    author: "",
  },
];

const quotesClasslist = document.querySelector("#quotes").classList;

if (!quotesClasslist.contains("hidden")) {
  const quote = document.querySelector("#quotes div:first-child");
  const author = document.querySelector("#quotes div:last-child");
  const todayQuote = quotesList[Math.floor(Math.random() * quotesList.length)];

  quote.innerText = `"${todayQuote.quote}"`;
  author.innerText = `${todayQuote.author}`;
}
