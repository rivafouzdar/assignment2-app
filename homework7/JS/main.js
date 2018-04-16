d3.select("#circleList")
  .append("svg")
  .attr("width", 1200).attr("height", 730)
  .append("g")
  //echo
  .append("circle")
  .attr("cx", 440).attr("cy", 600)
  .attr("r", 10)
  .attr("position", "absolute")
  .attr("fill", "red");

//smartBulb
d3.select("g")
  .append("circle")
  .attr("cx", 512).attr("cy", 345)
  .attr("r", 10)
  .attr("fill", "red");

//roomba
d3.select("g")
  .append("circle")
  .attr("cx", 940).attr("cy", 550)
  .attr("r", 10)
  .attr("fill", "red");

//nest
d3.select("g")
  .append("circle")
  .attr("cx", 765).attr("cy", 350)
  .attr("r", 10)
  .attr("fill", "red");

//homeSecurity
d3.select("g")
  .append("circle")
  .attr("cx", 1060).attr("cy", 390)
  .attr("r", 10)
  .attr("fill", "red");

d3.selectAll("circle")
    .on("mouseover", mouseover);

var tooltip = d3.select("#circleList")
                .append("div")
                .style("visibility", "hidden")
                .style("z-index", "10")
                .style("position", "absolute");

function mouseover(d) {

    tooltip.style("visibility", "visible")
             .text("hello")
             .style("top", event.pageY+"px")
             .style("left", event.pageX+"px");
}
