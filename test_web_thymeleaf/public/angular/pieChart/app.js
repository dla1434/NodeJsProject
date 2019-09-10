var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.data = [];
  
  var push = function() {
    $scope.data.push({
      name: $scope.data.length,
      data: Math.floor((Math.random()*100)+1)
    });
  }
  
  for(var i = 1; i < 10; i++) {
    push();
  }
  
  $scope.pushData = function() {
    push();
  }
});

app.directive('donutChart', function(ColorGenerator) {
  return {
    scope: {
      width: "@",
      height: "@",
      data: "="
    },
    link: function(scope, element, attrs) {
      var width = attrs.width || 300;
      var height = attrs.height || 300;
      var radius = Math.min(width, height) / 2;
      
      var donut = d3.select(element[0])
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      
      scope.$watch('data', function(newVal, oldVal) {
        donut.selectAll("*").remove();
        
        if (!newVal) {
          return;
        }
        
        var arc = d3.svg.arc()
          .outerRadius(radius)
          .innerRadius(radius-30);
        
        var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) { return d.data });
        
        var g = donut.selectAll(".arc")
          .data(pie(scope.data))
        .enter().append("g")
          .attr("class", "arc");
          
        g.append("path")
          .attr("d", arc)
          .style("fill", function(d, i) { return ColorGenerator.generate() });
        }, true);
    }
  }
});

app.factory('ColorGenerator', function() {
  return {
    generate: function get_random_color() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.round(Math.random() * 15)];
      }
      return color;
    }
  }
})