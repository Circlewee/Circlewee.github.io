function savingLinks() {
  localStorage.setItem(LINKS_KEY, JSON.stringify(links));
}

// 화면에 link를 추가하는 함수
function paintLink(newLink) {
  const leftBlock = document.querySelector("#leftblock");
  const linkIcon = document.createElement("span");
  const linkSpan = document.createElement("span");
  const linkDiv = document.createElement("div");

  linkIcon.classList.add("linkIcon");
  linkSpan.innerText = `${newLink.name}`;
  linkDiv.classList.add("linkDiv", replaceSpace(newLink.name));
  linkDiv.id = newLink.id;

  linkIcon.addEventListener("click", deleteLink);
  linkSpan.addEventListener("mouseup", handleLinkButtonClick);
  linkSpan.addEventListener("mouseenter", linkHover);
  linkSpan.addEventListener("mouseleave", linknotHover);

  linkDiv.appendChild(linkIcon);
  linkDiv.appendChild(linkSpan);
  leftBlock.appendChild(linkDiv);
}

// 링크 클릭 이벤트 처리 함수
function handleLinkButtonClick(event) {
  if (event.button === 0) {
    links.forEach((linkElement) => {
      if (event.target.innerText === linkElement.name) {
        location = linkElement.address;
      }
    });
  } else if (event.button === 1) {
    links.forEach((linkElement) => {
      if (event.target.innerText === linkElement.name) {
        window.open(linkElement.address);
      }
    });
  }
}

// 새로운 링크 제출 이벤트 처리 함수
function newLinkSubmit(event) {
  event.preventDefault();

  const newLink = {
    id: Date.now(),
    name: newLinkInputForm[0].value,
    address: `${HTTPS}` + newLinkInputForm[1].value,
    color: newLinkInputForm[2].value,
  };

  newLinkInputForm[0].value = "";
  newLinkInputForm[1].value = "";
  newLinkInputForm[2].value = "";

  addLinkButton.parentElement.children[1].classList.toggle("hidden");
  links.push(newLink);
  paintLink(newLink);
  savingLinks();
}

//마우스가 링크에 들어올 때 이벤트
function linkHover(event) {
  links.forEach((linkElement) => {
    if (event.target.innerText === linkElement.name) {
      event.target.style.color = linkElement.color;
    }
  });
}

// 마우스가 링크에서 나갈 때 이벤트
function linknotHover(event) {
  event.target.style.color = "var(--default-font-color)";
}

function deleteLink(event) {
  const deleteLink = event.target.parentElement;
  deleteLink.remove();
  links = links.filter((link) => link.id !== parseInt(deleteLink.id));
  savingLinks();
}

function replaceSpace(linkName) {
  return String(linkName).replace(/ /g, "_");
}

const LINKS_KEY = "links";
const HTTPS = "https://";
let links = [];
const savedLinks = localStorage.getItem(LINKS_KEY);

if (savedLinks) {
  const parsedLinks = JSON.parse(savedLinks);
  links = parsedLinks;
  parsedLinks.forEach(paintLink);
}

// 새로운 링크 추가 버튼 이벤트 추가
const addLinkButton = document.querySelector(".addLinkButton");
addLinkButton.addEventListener("click", function () {
  addLinkButton.parentElement.children[1].classList.toggle("hidden");
});

// 링크 추가 버튼 클릭 이벤트 추가
const newLinkInputForm = document.querySelector(".newLinkInputForm");
newLinkInputForm.addEventListener("submit", newLinkSubmit);
