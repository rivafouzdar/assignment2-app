d3.select("#circleList")
  .append("svg")
  .attr("width", 1200).attr("height", 730)
  .append("g");

//echo
d3.select("g")
  .append("circle")
  .attr("cx", 440).attr("cy", 600)
  .attr("r", 10)
  .attr("position", "absolute")
  .attr("fill", "red")
  .attr("text", "Amazon Echo");

//smartBulb
d3.select("g")
  .append("circle")
  .attr("cx", 512).attr("cy", 345)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("text", "SmartBulb");

//roomba
d3.select("g")
  .append("circle")
  .attr("cx", 940).attr("cy", 550)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("text", "Roomba");

//nest
d3.select("g")
  .append("circle")
  .attr("cx", 765).attr("cy", 350)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("text", "Nest");

//homeSecurity
d3.select("g")
  .append("circle")
  .attr("cx", 1060).attr("cy", 390)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("text", "Home Security System");

d3.selectAll("circle")
  .on("click", click)
  .on("mouseover", mouseover)
  .append("svg:title");


var tooltip = d3.select("#circleList")
                .append("div")
                .style("visibility", "hidden")
                .style("z-index", "10")
                .style("position", "absolute");

function mouseover(d) {

    tooltip.style("visibility", "visible")
             .text(d3.select(this).attr("text"))
             .style("top", event.pageY+"px")
             .style("left", event.pageX+"px");
}

function click(d) {

      var modal = document.getElementById("myModalECHO");
      modal.style.display = "block";

      var span = document.getElementById("closeECHO");
      span.onclick = function() {
        var modal = document.getElementById("myModalECHO");
        modal.style.display = "none";
      }
}
