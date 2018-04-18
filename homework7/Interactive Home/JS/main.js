var curModal = "None";

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
  .attr("curModal", "echo")
  .attr("text", "Amazon Echo");

//smartBulb
d3.select("g")
  .append("circle")
  .attr("cx", 512).attr("cy", 345)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("curModal", "bulb")
  .attr("text", "SmartBulb");

//roomba
d3.select("g")
  .append("circle")
  .attr("cx", 940).attr("cy", 550)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("curModal", "roomba")
  .attr("text", "Roomba");

//nest
d3.select("g")
  .append("circle")
  .attr("cx", 765).attr("cy", 350)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("curModal", "nest")
  .attr("text", "Nest");

//homeSecurity
d3.select("g")
  .append("circle")
  .attr("cx", 1060).attr("cy", 390)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("curModal", "security")
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
    curModal = d3.select(this).attr("curModal");
    console.log(curModal);
}

function click(d) {

    if (curModal == "echo") {
      var modal = document.getElementById("myModalECHO");
      modal.style.display = "block";

      var span = document.getElementById("closeECHO");
      span.onclick = function() {
        var modal = document.getElementById("myModalECHO");
        modal.style.display = "none";
      }
    }

    if (curModal == "bulb") {
      var modal = document.getElementById("myModalBULB");
      modal.style.display = "block";

      var span = document.getElementById("closeBULB");
      span.onclick = function() {
        var modal = document.getElementById("myModalBULB");
        modal.style.display = "none";
      }
    }

    if (curModal == "roomba") {
      var modal = document.getElementById("myModalROOMBA");
      modal.style.display = "block";

      var span = document.getElementById("closeROOMBA");
      span.onclick = function() {
        var modal = document.getElementById("myModalROOMBA");
        modal.style.display = "none";
      }
    }

    if (curModal == "nest") {
      var modal = document.getElementById("myModalNEST");
      modal.style.display = "block";

      var span = document.getElementById("closeNEST");
      span.onclick = function() {
        var modal = document.getElementById("myModalNEST");
        modal.style.display = "none";
      }
    }

    if (curModal == "security") {
      var modal = document.getElementById("myModalSECURITY");
      modal.style.display = "block";

      var span = document.getElementById("closeSECURITY");
      span.onclick = function() {
        var modal = document.getElementById("myModalSECURITY");
        modal.style.display = "none";
      }
    }
}
