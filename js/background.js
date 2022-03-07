function settingClick() {
  const clrPicker = document.querySelector(".clr-picker");
  const applyButton = document.createElement("button");

  if (document.querySelector(".applybutton") === null) {
    applyButton.classList.add("applybutton");
    applyButton.innerText = "Apply";
    applyButton.addEventListener("click", backgroundColorChange);
    buttonColorChange(applyButton, savedColor);
    clrPicker.appendChild(applyButton);
  }

  if (colorPalette.classList.contains("hidden")) {
    colorPalette.classList.toggle("hidden");
    clrPicker.classList.toggle("clr-open");
    colorPaletteInput.value = savedColor;
    colorPaletteInput.click();
  } else {
    colorPalette.classList.toggle("hidden");
    clrPicker.classList.toggle("clr-open");
  }
}

function backgroundColorChange(event) {
  const clrPicker = event.path[1];
  const clrValue = clrPicker.children[0].value;
  const applyButton = document.querySelector(".applybutton");

  if (clrValue !== background.style.backgroundColor) {
    background.style.backgroundColor = clrValue;
    savingColor(clrValue);
    savedColor = localStorage.getItem(COLOR_KEY);
    colorPaletteInput.value = savedColor;
  }
  colorPalette.classList.add("hidden");
  clrPicker.classList.remove("clr-open");
  buttonColorChange(applyButton, savedColor);
}

function savingColor(color) {
  localStorage.setItem(COLOR_KEY, color);
}

function buttonColorChange(button, color) {
  button.style.borderColor = color;
}

const background = document.body;
const backgroundSettingButton = background.querySelector(".backgroundSetting");
const colorPalette = document.querySelector(".colorPalette");
const colorPaletteInput = colorPalette.children[0].children[1];
const COLOR_KEY = "backgroundcolor";
const defaultBackgroundColor = {
  r: 0,
  g: 0,
  b: 0,
  h: 0,
  s: 0,
  v: 0,
  a: 1,
};
let savedColor = localStorage.getItem(COLOR_KEY);

if (!savedColor) {
  savingColor(JSON.stringify(defaultBackgroundColor));
} else {
  background.style.backgroundColor = savedColor;
}
backgroundSettingButton.addEventListener("click", settingClick);
