var width = window.innerWidth
var height = window.innerHeight

var line = d3.line()
	.curve(d3.curveBasis);

var input = d3.select("input")
	.on("input", changeLetters);

var letters = `Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it 
Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it Hey there! Welcome to giuliazafferani.it 
`;

var startingPath = "0";

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height)
	.call(d3.drag()
		.container(function(d) { return this; })
		.subject(function(d) { var p = [d3.event.x, d3.event.y]; return [p, p]; })
		.on("start", dragStarted));

var textPath = svg.append("defs").append("path")
	.attr("id", "textPath")
	.attr("d", startingPath);

var path = svg.append("path")
	.attr("d", startingPath);

var text = svg.append("text").append("textPath")
	.attr("xlink:href", "#textPath")
	.text(letters);

function changeLetters() {
	letters = input.node().value;
	text.text(letters);
}

function dragStarted() {
    document.getElementById("tip").style.display = "none";

	var d = d3.event.subject,
			x0 = d3.event.x,
			y0 = d3.event.y;

	path.datum(d);
	textPath.datum(d);

	d3.event.on("drag", function() {
		var x1 = d3.event.x,
				y1 = d3.event.y,
				dx = x1 - x0,
				dy = y1 - y0;

		if (dx * dx + dy * dy > 100) d.push([x0 = x1, y0 = y1]);
		else d[d.length - 1] = [x1, y1];
		textPath.attr("d", line);
		path.attr("d", line);
	});
}