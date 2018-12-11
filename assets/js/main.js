let layer1, layer2, layer3, layer4;

$(document).ready(() => {
  layer1 = d3.select("#bg-layer1");
  layer2 = d3.select("#bg-layer2");
  layer3 = d3.select("#bg-layer3");
  layer4 = d3.select("#bg-layer4");
  theme_base = localStorage.getItem("theme_base") || document.getElementById("css-theme").getAttribute("href").match("-(light|dark).css")[1];
  setTheme(theme_base);
  makeStrips([layer1, layer2, layer3, layer4]);
  $(document).scroll(updateBackground);
  $(window).resize(updateBackground);
  $("table").addClass("table table-hover");
  $("img").addClass("img img-responsive");
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
  let contentX = ($(".content-div").offset().left);
  let layer1Y = window.pageYOffset / 5;
  let layer2Y = window.pageYOffset / 4;
  let layer3Y = window.pageYOffset / 3;
  let layer4Y = window.pageYOffset / 2;
  layer1.attr("transform", `translate(${contentX}, -${layer1Y})`);
  layer2.attr("transform", `translate(0, ${-layer2Y})`);
  layer3.attr("transform", `translate(0, ${-layer3Y})`);
  layer4.attr("transform", `translate(0, ${-layer4Y})`);
}

function makeStrips(layers) {
  for (let i = 10; i < 100; i *= 1.05) {
    let randomLayer = layers[Math.floor(Math.random() * layers.length)];
    drawLine(-i, 100, 1, 1000 * (Math.random() + 1), randomLayer);
  }
  updateBackground();
}

function toggleTheme() {
  theme_base = theme_base=="light"?"dark":"light";
  localStorage.setItem("theme_base", theme_base);
  setTheme(theme_base);
}

function setTheme(theme_base) {
  document.getElementById("css-theme").setAttribute("href", `${window.location.origin}/assets/css/main-${theme_base}.css`);
}
