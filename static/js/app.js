// from data.js
var tableData = data;

// YOUR CODE HERE!
tableData.forEach((ufoSightingt) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightingt).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  