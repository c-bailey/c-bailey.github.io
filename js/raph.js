var r = Raphael('hexgrid', 600, 600)

hexagon = function(radius) {
    var path = ""
    for (var i = 0; i <= 6; i++) {
        var a = i * 60,
            x = radius * Math.cos(a * Math.PI / 180),
            y = radius * Math.sin(a * Math.PI / 180)
        path += (i == 0 ? "M" : "L") + x + "," + y
    }
    path += "Z"
    return r.path(path)
}

hex=hexagon(150);
hex2=hexagon(150);
hex3=hexagon(150);

text=r.text(400,182,"CODE");
text2=r.text(400,448,"DESIGN");
text3=r.text(170,315,"CIRCUITS");

text.attr({ "font-family": "arial", fill: "#fff", "font-size": 48 })
text2.attr({ "font-family": "arial", fill: "#fff", "font-size": 48 })
text3.attr({ "font-family": "arial", fill: "#fff", "font-size": 48 })

hex.attr({ fill:'#f96876', stroke:'none' })
hex2.attr({ fill:'#d0f667', stroke:'none' })
hex3.attr({ fill:'#4fbdb5', stroke:'none' })

hex.transform('t400, 182');
hex2.transform('t400, 448');
hex3.transform('t170, 315');

hex.hover(function() {
	hex.attr({fill: '#e12436'});
	},
	function() {
		hex.attr({fill: '#f96876'})
	}
);

text.hover(function() {
	hex.attr({fill: '#e12436'});
	},
	function() {
		hex.attr({fill: '#f96876'})
	}
);

hex2.hover(function() {
	hex2.attr({fill: '#abdd23'});
	},
	function() {
		hex2.attr({fill: '#d0f667'})
	}
);

text2.hover(function() {
	hex2.attr({fill: '#abdd23'});
	},
	function() {
		hex2.attr({fill: '#d0f667'})
	}
);

hex3.hover(function() {
	hex3.attr({fill: '#178f86'});
	},
	function() {
		hex3.attr({fill: '#4fbdb5'})
	}
);

text3.hover(function() {
	hex3.attr({fill: '#178f86'});
	},
	function() {
		hex3.attr({fill: '#4fbdb5'})
	}
);