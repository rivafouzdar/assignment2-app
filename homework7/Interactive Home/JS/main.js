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
  .attr("fill", "red");

//homeSecurity
d3.select("g")
  .append("circle")
  .attr("cx", 1060).attr("cy", 390)
  .attr("r", 10)
  .attr("fill", "red")
  .attr("text", "Home Security System");

d3.selectAll("circle")
  .on("mouseover", mouseover)
  .append("svg:title")
  .text("circless");

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


// window.onload = function() {

//   // Get the button that opens the echo modal
//   var echo = document.getElementById("echo");

//   // When the user clicks the button, open the modal
//   echo.onclick = function() {
//       var modal = document.getElementById("myModalECHO");
//       modal.style.display = "block";

//       var span = document.getElementById("closeECHO");
//       span.onclick = function() {
//         var modal = document.getElementById("myModalECHO");
//         modal.style.display = "none";
//       }
//   }

//   // Get the button that opens the bulb modal
//   var bulb = document.getElementById("bulb");

//   // When the user clicks the button, open the modal
//   bulb.onclick = function() {
//       var modal = document.getElementById("myModalBULB");
//       modal.style.display = "block";

//       var span = document.getElementById("closeBULB");
//       span.onclick = function() {
//         var modal = document.getElementById("myModalBULB");
//         modal.style.display = "none";
//       }
//   }

//   // Get the button that opens the echo modal
//   var roomba = document.getElementById("roomba");

//   // When the user clicks the button, open the modal
//   roomba.onclick = function() {
//       var modal = document.getElementById("myModalROOMBA");
//       modal.style.display = "block";

//       var span = document.getElementById("closeROOMBA");
//       span.onclick = function() {
//         var modal = document.getElementById("myModalROOMBA");
//         modal.style.display = "none";
//       }
//   }

//   // Get the button that opens the echo modal
//   var nest = document.getElementById("nest");

//   // When the user clicks the button, open the modal
//   nest.onclick = function() {
//       var modal = document.getElementById("myModalNEST");
//       modal.style.display = "block";

//       var span = document.getElementById("closeNEST");
//       span.onclick = function() {
//         var modal = document.getElementById("myModalNEST");
//         modal.style.display = "none";
//       }
//   }

//   // Get the button that opens the echo modal
//   var security = document.getElementById("security");

//   // When the user clicks the button, open the modal
//   security.onclick = function() {
//       var modal = document.getElementById("myModalSECURITY");
//       modal.style.display = "block";

//       var span = document.getElementById("closeSECURITY");
//       span.onclick = function() {
//         var modal = document.getElementById("myModalSECURITY");
//         modal.style.display = "none";
//       }
//   }


//   // // When the user clicks anywhere outside of the modal, close it
//   // window.onclick = function(event) {
//   //     if (event.target == modal) {
//   //         modal.style.display = "none";
//   //     }
//   // }
// };