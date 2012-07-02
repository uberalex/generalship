var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  },
  didInsertElement: function(){
    var rectDemo = d3.select("#chart").
  append("svg:svg").
  attr("width", 400).
  attr("height", 300);

rectDemo.append("svg:rect").
  attr("x", 100).
  attr("y", 100).
  attr("height", 100).
  attr("width", 200);
  }
});
