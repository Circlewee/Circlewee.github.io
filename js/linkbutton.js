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
    const linkIcon = document.createElement("span");
    const linkSpan = document.createElement("span");
    const linkDiv = document.createElement("div");

    linkIcon.classList.add("linkIcon");
    linkSpan.innerText = `${linkElement.name}`;
    linkDiv.classList.add("linkDiv", linkElement.name);
    linkDiv.appendChild(linkIcon);
    linkDiv.appendChild(linkSpan);
    leftBlock.appendChild(linkDiv);
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
