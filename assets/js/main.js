let layer1, layer2, layer3, layer4;
let themeBase;

$(document).ready(() => {
  layer1 = d3.select("#bg-layer1");
  layer2 = d3.select("#bg-layer2");
  layer3 = d3.select("#bg-layer3");
  layer4 = d3.select("#bg-layer4");
  themeBase = localStorage.getItem("themeBase") || document.getElementById("css-theme").getAttribute("href").match("-(light|dark).css")[1];
  setTheme(themeBase);
  makeStrips([layer1, layer2, layer3, layer4]);
  $(document).scroll(updateBackground);
  $(window).resize(updateBackground);
  $("table").addClass("table table-hover");
  $("img").addClass("img img-responsive");
  $(".content-div > h1, .content-div > a > h1").addClass("h1-strip");
  setTimeout(updateBackground, 500);
});

function drawLine(x, y, w, h, layer) {
  let line = layer.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "url(#Gradient1)");
}

function updateBackground() {
  // Update stripes
  let contentX = ($(".content-div").offset().left);
  let layer1Y = window.pageYOffset / 5;
  let layer2Y = window.pageYOffset / 4;
  let layer3Y = window.pageYOffset / 3;
  let layer4Y = window.pageYOffset / 2;
  layer1.attr("transform", `translate(${contentX}, ${-layer1Y})`);
  layer2.attr("transform", `translate(${contentX}, ${-layer2Y})`);
  layer3.attr("transform", `translate(${contentX}, ${-layer3Y})`);
  layer4.attr("transform", `translate(${contentX}, ${-layer4Y})`);
  // Update transparent overlays over h1
  $(".h1-overlay").remove();
  $(".h1-strip")
    .filter((index, node) => $(node).isInViewport())
    .map((index, node) => {
      let {left, top, right, bottom, x, y, width, height} = node.getBoundingClientRect();
      let style = window.getComputedStyle?getComputedStyle(node, null):node.currentStyle;
      let marginTop = parseInt(style.marginTop) || 0;
      let overlay = document.createElement("div");
      overlay.classList.add("h1-overlay");
      overlay.style.left = 0;
      overlay.style.top = `${window.scrollY+top-marginTop}px`;
      overlay.style.height = `${height+marginTop}px`;
      document.body.appendChild(overlay);
  });
}

function makeStrips(layers) {
  let layerProbs = new Array(layers.length).fill(0).map((_, index) => index / layers.length);
  for (let i = 10; i < 100; i *= 1.05) {
    let index = Math.floor(Math.random() * layers.length);
    let randomLayer = layers[index];
    if (Math.random() > layerProbs[index]) {
      drawLine(-i, 100, 1, 1000 * (Math.random() + 1), randomLayer);
    }
  }
  updateBackground();
}

function toggleTheme() {
  themeBase = themeBase == "light" ? "dark" : "light";
  localStorage.setItem("themeBase", themeBase);
  setTheme(themeBase);
}

function setTheme(themeBase) {
  let oldTheme = themeBase == "light" ? "dark" : "light";
  let href = document.getElementById("css-theme").getAttribute("href").replace(oldTheme, themeBase);
  let css = document.getElementById("css-theme");
  css.setAttribute("href", href);
}

// https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
