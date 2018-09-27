// from data.js

var tableData = data;

var targetTtable = d3.select("#ufo-table");

var targetBbody = targetTtable.select("tbody");

// YOUR CODE HERE!

function handleSubmit() {

    // Prevent the page from refreshing

    d3.event.preventDefault();

  

    // Select the input value from the form

    var filterdate = d3.select("#datetime").node().value;

    console.log(filterdate);

  

    // clear the input value

    targetTtable.select("tbody").text("");

  

    // Build the table with the new data

    filterData(filterdate);

}

// var filters={

//     "datetime": d3.select("#datetime").node().value,

//     "state": d3.select("#state").node().value,

//     "shapes": d3.select("#shape").node().value,

// };



function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

function filterData(dd) {

    // alert(dd);

    var checkboxes = document.querySelectorAll('input[name=country]:checked');

    countries = [];

    // for (var i = 0; i < checkboxes.length; i++) {countries.push(encodeURIComponent(checkboxes[i].value))}

    for (var i = 0; i < checkboxes.length; i++) {countries.push(checkboxes[i].value)}

    // console.log(countries);



    var checkboxes = document.querySelectorAll('input[name=shapes]:checked');

    shapes = [];

    for (var i = 0; i < checkboxes.length; i++) {shapes.push(checkboxes[i].value)}

    // console.log(shapes);



    var checkboxes = document.querySelectorAll('input[name=cities]:checked');

    cities = [];

    for (var i = 0; i < checkboxes.length; i++) {cities.push(checkboxes[i].value)}

    // console.log(cities);



    var checkboxes = document.querySelectorAll('input[name=states]:checked');

    states = [];

    for (var i = 0; i < checkboxes.length; i++) {states.push(checkboxes[i].value)}

    // console.log(states);

    if(dd==""){

        // console.log(dates);

        dates_2 = dates;

    }else{

        dates_2 = [dd]

    }



    targetTtable.select("tbody").text("");

    for(i=0;i<tableData.length;i++){

        // console.log(tableData[i].datetime);

        // if(String(tableData[i].datetime)==String(dd) && states.includes(tableData[i].state) && cities.includes(tableData[i].city) && shapes.includes(tableData[i].shape) && countries.includes(tableData[i].country)){

        if(dates_2.includes(tableData[i].datetime) && states.includes(tableData[i].state) && cities.includes(tableData[i].city) && shapes.includes(tableData[i].shape) && countries.includes(tableData[i].country)){

            // console.log(tableData[i]);

            var tbodytr = targetBbody.append("tr");

            tbodytr.append("td").text(tableData[i].datetime);

            tbodytr.append("td").text(tableData[i].city);

            tbodytr.append("td").text(tableData[i].state);

            tbodytr.append("td").text(tableData[i].country);

            tbodytr.append("td").text(tableData[i].shape);

            tbodytr.append("td").text(tableData[i].durationMinutes);

            tbodytr.append("td").text(tableData[i].comments);

        }

    }

}

for(i=0;i<tableData.length;i++){

    // console.log(tableData[i]);

    var tbodytr = targetBbody.append("tr");

    tbodytr.append("td").text(tableData[i].datetime);

    tbodytr.append("td").text(tableData[i].city);

    tbodytr.append("td").text(tableData[i].state);

    tbodytr.append("td").text(tableData[i].country);

    tbodytr.append("td").text(tableData[i].shape);

    tbodytr.append("td").text(tableData[i].durationMinutes);

    tbodytr.append("td").text(tableData[i].comments);

}

dates = [];

cities= [];

countries = [];

states = [];

shapes = [];

for(i=0;i<tableData.length;i++){

    if(!dates.includes(tableData[i].datetime)){dates.push(tableData[i].datetime);}

    if(!cities.includes(tableData[i].city)){cities.push(tableData[i].city);}

    if(!states.includes(tableData[i].state)){states.push(tableData[i].state);}

    if(!countries.includes(tableData[i].country)){countries.push(tableData[i].country);}

    if(!shapes.includes(tableData[i].shape)){shapes.push(tableData[i].shape);}

}

// console.log(dates);

// console.log(cities);

// console.log(countries);

// console.log(states);

// console.log(shapes);

dates.sort();

cities.sort();

countries.sort();

states.sort();

shapes.sort();



var targetFilters = d3.select("#filters");



var liFilter = targetFilters.append("li").attr("class","filter list-group-item");

liFilter.append("label").text("Countris").attr('for',"country");

liFilter.append("br");

spanLi = liFilter.append("div").attr('class',"filters_div");

for(i=0;i<countries.length;i++){

    spanLi.append("input").attr("checked", true).attr("type", "checkbox").attr("id", "country"+i).attr("name", "country").attr("value", countries[i]);

    spanLi.append("label").attr('for',"country"+i).text(" " + countries[i].toUpperCase());

    spanLi.append("br");

}



var liFilter = targetFilters.append("li").attr("class","filter list-group-item");

liFilter.append("label").text("States").attr('for',"states");

liFilter.append("br");

spanLi = liFilter.append("div").attr('class',"filters_div");

for(i=0;i<states.length;i++){

    spanLi.append("input").attr("checked", true).attr("type", "checkbox").attr("id", "states"+i).attr("name", "states").attr("value", states[i]);

    spanLi.append("label").attr('for',"states"+i).text(" " + states[i].toUpperCase());

    spanLi.append("br");

}



var liFilter = targetFilters.append("li").attr("class","filter list-group-item");

liFilter.append("label").text("Cities").attr('for',"cities");

liFilter.append("br");

spanLi = liFilter.append("div").attr('class',"filters_div");

for(i=0;i<cities.length;i++){

    spanLi.append("input").attr("checked", true).attr("type", "checkbox").attr("id", "cities"+i).attr("name", "cities").attr("value", cities[i]);

    spanLi.append("label").attr('for',"cities"+i).text(" " + capitalizeFirstLetter(cities[i]));

    spanLi.append("br");

}



var liFilter = targetFilters.append("li").attr("class","filter list-group-item");

liFilter.append("label").text("Shapes").attr('for',"shapes").attr('onclick',"showhid('shapes_span')");

liFilter.append("br");

spanLi = liFilter.append("div").attr('id',"shapes_span").attr('class',"filters_div");

for(i=0;i<shapes.length;i++){

    spanLi.append("input").attr("checked", true).attr("type", "checkbox").attr("id", "shapes"+i).attr("name", "shapes").attr("value", shapes[i]);

    spanLi.append("label").attr('for',"shapes"+i).text(" " + capitalizeFirstLetter(shapes[i]));

    spanLi.append("br");

}



function showhid(elem){

    var LINE = document.getElementById(elem);

}



// if(obj.datetime!="" AND obj.state!="" AND obj.shapes!=""){

//     var filterData = tableData.filter(obj => obj.datetime == filters.datetime && obj.state == filters.state && obj.shape == filters.shapes);

// }elseif(obj.datetime!="" AND obj.state!="" AND obj.shapes==""){

//     var filterData = tableData.filter(obj => obj.datetime == filters.datetime && obj.state == filters.state);

// }elseif(obj.datetime!="" AND obj.state=="" AND obj.shapes!=""){

//     var filterData = tableData.filter(obj => obj.datetime == filters.datetime && obj.shape == filters.shapes);

// }elseif(obj.datetime!="" AND obj.state=="" AND obj.shapes==""){

//     var filterData = tableData.filter(obj => obj.datetime == filters.datetime);

// }elseif(obj.datetime=="" AND obj.state!="" AND obj.shapes!=""){

//     var filterData = tableData.filter(obj => obj.state == filters.state && obj.shape == filters.shapes);

// }elseif(obj.datetime="" AND obj.state="" AND obj.shapes=""){

//     var Textwarning = "You need to choose a filter";

// }

 

d3.select("#filter-btn").on("click", handleSubmit);

d3.selectAll("input[type=checkbox]").on("change", handleSubmit);

// var filterdate = d3.select("#datetime").node().value;

// console.log(filterdate);



// // clear the input value

// targetTtable.select("tbody").text("");



// // Build the table with the new data

// filterData(filterdate);
  