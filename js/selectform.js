function handleSearch(event) {
  event.preventDefault();

  const engine = event.target[0].value;
  let value = event.target[1].value;

  if (engine === "Naver") {
    location = "https://search.naver.com/search.naver?query=" + value;
  } else if (engine === "Google") {
    location = "https://www.google.co.kr/search?q=" + value;
  } else if (engine === "Youtube") {
    location = "https://www.youtube.com/results?search_query=" + value;
  }

  selectform.querySelector("input").value = "";
}

const selectform = document.querySelector(".selectform");
selectform.addEventListener("submit", handleSearch);
