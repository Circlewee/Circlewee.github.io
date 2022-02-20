const HTTPS = "https://";
const links = [
  {
    name: "Naver",
    link: `${HTTPS}www.naver.com`,
  },
  {
    name: "Youtube",
    link: `${HTTPS}www.youtube.com`,
  },
  {
    name: "Github",
    link: `${HTTPS}github.com/Circlewee`,
  },
];
const leftBlock = document.querySelector("#leftblock");

function paintLink() {
  links.forEach((linkElement) => {
    const linkSpan = document.createElement("span");
    linkSpan.classList.add("linkSpan", linkElement.name);
    linkSpan.innerText = `${linkElement.name}`;
    leftBlock.appendChild(linkSpan);
  });
}

function handleLinkButtonClick(event) {
  links.forEach((linkElement) => {
    if (event.target.innerText === linkElement.name) {
      window.location.href = linkElement.link;
    }
  });
}

paintLink();
leftBlock.addEventListener("click", handleLinkButtonClick);
