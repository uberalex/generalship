var map = d3.select("#map")
            .append("svg")
            .attr("width",500)
            .attr("height",500);

var coords = [ [1,2], [1,3], [2,4], [2,5], [3,6], [3,7], [4,8], [4,9] ];

var nodes = {[
                {"x":"1",
                 "y":"1",
                 "r":"5",
                 "name":"one"},
                {"x":"2",
                 "y":"2",
                 "r":"10",
                 "name":"two"},
                {"x":"3",
                 "y":"3",
                 "r":"20",
                 "name":"three"}
            ]};

var nodes = map.selectAll("circle")
            .json(nodes)
            .enter()
            .append("circle")
            .attr("cx",function(d) { return d.x * 50; })
            .attr("cy",function(d) { return d.y * 50; })
            .attr("r", function(d) { return d.r; });
