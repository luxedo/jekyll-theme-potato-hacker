let layer1, layer2, layer3, layer4, bgColor1, bgColor2, bgColor3;
$(document).ready(() => {
  bgColor1 = $(".bgColor1").css("color");
  bgColor2 = $(".bgColor2").css("color");
  bgColor3 = $(".bgColor3").css("color");
  layer1 = d3.select("#bg-layer1");
  layer2 = d3.select("#bg-layer2");
  layer3 = d3.select("#bg-layer3");
  layer4 = d3.select("#bg-layer4");
  makeStrips();
  updateBackground();
  $(document).scroll(updateBackground);
  $(window).resize(updateBackground);
});

function drawLine(x, y, w, h, color, layer, width=1) {
    let line = layer.append("rect")
                             .attr("x", x)
                             .attr("y", y)
                             .attr("width", w)
                             .attr("height", h)
                             .attr("fill", "url(#Gradient1)");
}

function updateBackground() {
  let contentX = ($(".content-div").offset().left);
  let layer1Y = window.pageYOffset/5;
  let layer2Y = window.pageYOffset/4;
  let layer3Y = window.pageYOffset/3;
  let layer4Y = window.pageYOffset/2;
  layer1.attr("transform", `translate(${contentX}, -${layer1Y})`);
  layer2.attr("transform", `translate(0, ${-layer2Y})`);
  layer3.attr("transform", `translate(0, ${-layer3Y})`);
  layer4.attr("transform", `translate(0, ${-layer4Y})`);
}

function makeStrips() {
  let colors = [bgColor1, bgColor2];
  let layers = [layer1, layer2, layer3, layer4];
  for (let i = 10; i< 100; i*=1.05) {
    let randomLayer = layers[Math.floor(Math.random()*layers.length)];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    drawLine(-i, 100, 1, 1000*(Math.random()+1), randomColor, randomLayer);
  }
}
