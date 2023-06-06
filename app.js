const offsetX = document.querySelector(".offset-x");
const offsetY = document.querySelector(".offset-y");
const blurRadius = document.querySelector(".blur-radius");
const blurSpread = document.querySelector(".blur-spread");
const getColor = document.querySelector(".color");
const getCss = document.querySelector(".css");
const Box = document.querySelector(".box");
const getElements = document.getElementsByTagName("span");

function changeBoxShadow() {
  const setBoxShadowCss = `${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${blurSpread.value}px ${getColor.value}`;
  Box.style.boxShadow = setBoxShadowCss;
  getCss.value = setBoxShadowCss;
   getElements[0].innerText = offsetX.value+"px";
   getElements[1].innerText = offsetY.value+"px";
   getElements[2].innerText = blurRadius.value+"px";
   getElements[3].innerText = blurSpread.value+"px";
}
[offsetX, offsetY, blurRadius, blurSpread, getColor].forEach(e => {
  e.oninput = changeBoxShadow;
});
changeBoxShadow();
