// from data.js
var tableData = data;
// get table references
const tbody = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach (element => {
    // Append a row to the table body
    const row = tbody.append("tr");
    //console.log(element["city"]) 
    var city = element["city"]
    var country = element["country"]
    var state = element["state"]
    var shape = element["shape"]
    var durationMinutes = element["durationMinutes"]
    var comments = element["comments"]
    var datetime = element["datetime"]
    //  console.log (city)
    //  console.log (country)
    //  console.log (state)
    //  console.log (shape)
    //  console.log (durationMinutes)
    //  console.log (comments)
    row.append("td").text(datetime)
    row.append("td").text(city)
    row.append("td").text(country)
    row.append("td").text(state)
    row.append("td").text(shape)
    row.append("td").text(durationMinutes)
    row.append("td").text(comments)
});

function handleClick() {
        console.log ("I have been click")// Grab the datetime value from the filter
        const date = d3.select("#datetime").property("value");
        console.log(date)
        var filterdata = tableData.filter(element=> element["datetime"] === date); 
        //Clean the table body
        tbody.html("")
        console.log (filterdata)
        filterdata.forEach (element => {
            // Append a row to the table body
            const row = tbody.append("tr");
            //console.log(element["city"]) 
            var city = element["city"]
            var country = element["country"]
            var state = element["state"]
            var shape = element["shape"]
            var durationMinutes = element["durationMinutes"]
            var comments = element["comments"]
            var datetime = element["datetime"]
            //  console.log (city)
            //  console.log (country)
            //  console.log (state)
            //  console.log (shape)
            //  console.log (durationMinutes)
            //  console.log (comments)
            row.append("td").text(datetime)
            row.append("td").text(city)
            row.append("td").text(country)
            row.append("td").text(state)
            row.append("td").text(shape)
            row.append("td").text(durationMinutes)
            row.append("td").text(comments)
        });
    
    }
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

