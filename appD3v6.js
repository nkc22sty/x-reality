
var dataset = [
  [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12],
  [15, 20, 18, 17, 16, 18, 23, 25, 22, 18, 15, 18],
  [10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15],
  [10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15],
  [10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15]
];
console.log(dataset.length);

var numPeriods = dataset.length;

var content = d3.select("#helloworld");

var myBars = content
  .selectAll("a-box.bar")
  .data(dataset.flat())
  .enter()
  .append("a-box")
  .classed("bar", true)
  .attr("position", function(d, i) {
    x = i % numPeriods;
    z = Math.floor(i / numPeriods);
    y = d / 8;
    return x + " " + y + " " + z;
  })
  .attr("height", 0)
  .attr("width", function(d, i) {
    return 0.9;
  })
  .attr("depth", function(d, i) {
    return 0.9;
  })
  .attr("color", function(d, i) {
    return d3.interpolateBlues(i / dataset.flat().length);
  })
  .transition()
  .duration(1000)
  .delay(function(d, i) {
    return i * 10;
  })
  .attr("height", function(d) {
    return d / 4;
  });