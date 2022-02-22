const HTTPS = "https://";
const links = [
  {
    name: "Naver",
    link: `${HTTPS}www.naver.com`,
    color: "#43dc00",
  },
  {
    name: "Youtube",
    link: `${HTTPS}www.youtube.com`,
    color: "#ff0000",
  },
  {
    name: "Github",
    link: `${HTTPS}github.com/Circlewee`,
    color: "#636363",
  },
  {
    name: "Google",
    link: `${HTTPS}google.com`,
    color: "#4285f4",
  },
  {
    name: "Twitch",
    link: `${HTTPS}twitch.tv`,
    color: "#9146ff",
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
    linkSpan.addEventListener("click", handleLinkButtonClick);
    linkSpan.addEventListener("mouseenter", linkHover);
    linkSpan.addEventListener("mouseleave", linknotHover);
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

function linkHover(event) {
  links.forEach((linkElement) => {
    if (event.target.innerText === linkElement.name) {
      event.target.style.color = linkElement.color;
    }
  });
}

function linknotHover(event) {
  event.target.style.color = "var(--default-font-color)";
}

paintLink();
