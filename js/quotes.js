const quotes = [
  {
    quotes: "a",
    author: "aa",
  },
  {
    quotes: "b",
    author: "bb",
  },
  {
    quotes: "c",
    author: "cc",
  },
  {
    quotes: "d",
    author: "dd",
  },
  {
    quotes: "e",
    author: "ee",
  },
  {
    quotes: "f",
    author: "ff",
  },
  {
    quotes: "g",
    author: "gg",
  },
  {
    quotes: "h",
    author: "hh",
  },
  {
    quotes: "i",
    author: "ii",
  },
  {
    quotes: "j",
    author: "jj",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;