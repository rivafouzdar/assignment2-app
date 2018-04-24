// create global variable to track the current modal
var curModal = "None";

// select circleList ID to begin SVG group
d3.select("#circleList")
  .append("svg")
  .attr("width", 1200).attr("height", 730)
  .append("g");

//create SVG for the echo
d3.select("g")
  .append("circle")
  .attr("cx", 443).attr("cy", 605)
  .attr("r", 15)
  .attr("position", "absolute")
  .attr("fill", "red")
  .attr("curModal", "echo")
  .attr("text", "Amazon Echo");

//create SVG for the smartbulb
d3.select("g")
  .append("circle")
  .attr("cx", 512).attr("cy", 345)
  .attr("r", 15)
  .attr("fill", "red")
  .attr("curModal", "bulb")
  .attr("text", "SmartBulb");

//create SVG for the roomba
d3.select("g")
  .append("circle")
  .attr("cx", 935).attr("cy", 555)
  .attr("r", 15)
  .attr("fill", "red")
  .attr("curModal", "roomba")
  .attr("text", "Roomba");

//create SVG for the nest
d3.select("g")
  .append("circle")
  .attr("cx", 764).attr("cy", 355)
  .attr("r", 15)
  .attr("fill", "red")
  .attr("curModal", "nest")
  .attr("text", "Nest");

//create SVG for the homeSecurity
d3.select("g")
  .append("circle")
  .attr("cx", 1063).attr("cy", 395)
  .attr("r", 15)
  .attr("fill", "red")
  .attr("curModal", "security")
  .attr("text", "Home Security System");

d3.selectAll("circle")
  .on("click", click)
  .on("mouseover", mouseover)
  .append("svg:title");

// create the tooltip variable to be called
var tooltip = d3.select("#circleList")
                .append("div")
                .style("visibility", "hidden")
                .style("z-index", "10")
                .style("position", "absolute");

// mouseover function to be called when mouseover occurs
function mouseover(d) {

    tooltip.style("visibility", "visible")
             .text(d3.select(this).attr("text"))
             .style("top", event.pageY+"px")
             .style("left", event.pageX+"px");
    // when mouseover occurs, update curModal
    curModal = d3.select(this).attr("curModal");
}

// open modal when svg circle is clicked, depending on curModal
function click(d) {

    if (curModal == "echo") {
      var modal = document.getElementById("myModalECHO");
      modal.style.display = "block"; //change display to block so that it appears

      var span = document.getElementById("closeECHO");
      span.onclick = function() {
        var modal = document.getElementById("myModalECHO");
        modal.style.display = "none"; //change display to none when X is clicked
      }
    }

    if (curModal == "bulb") {
      var modal = document.getElementById("myModalBULB");
      modal.style.display = "block"; //change display to block so that it appears

      var span = document.getElementById("closeBULB");
      span.onclick = function() {
        var modal = document.getElementById("myModalBULB");
        modal.style.display = "none"; //change display to none when X is clicked
      }
    }

    if (curModal == "roomba") {
      var modal = document.getElementById("myModalROOMBA");
      modal.style.display = "block"; //change display to block so that it appears

      var span = document.getElementById("closeROOMBA");
      span.onclick = function() {
        var modal = document.getElementById("myModalROOMBA");
        modal.style.display = "none"; //change display to none when X is clicked
      }
    }

    if (curModal == "nest") {
      var modal = document.getElementById("myModalNEST");
      modal.style.display = "block"; //change display to block so that it appears

      var span = document.getElementById("closeNEST");
      span.onclick = function() {
        var modal = document.getElementById("myModalNEST");
        modal.style.display = "none"; //change display to none when X is clicked
      }
    }

    if (curModal == "security") {
      var modal = document.getElementById("myModalSECURITY");
      modal.style.display = "block"; //change display to block so that it appears

      var span = document.getElementById("closeSECURITY");
      span.onclick = function() {
        var modal = document.getElementById("myModalSECURITY");
        modal.style.display = "none"; //change display to none when X is clicked
      }
    }
}
