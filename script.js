
//map


//TSUNAMI




let map = L.map('map',{center:[50,2], zoom:2, maxZoom: 19});

let cluster = L.markerClusterGroup();
cluster.addTo(map);


const OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom : 19,
attribution: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
OpenStreetMap_Mapnik.addTo(map);

d3.tsv("data/tsunamis-2021-09-01_10-25-52_+0200.tsv").then(function(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const lat = data[i].Latitude;
        const lon = data[i].Longitude;
        let marker = L.marker([lat,lon]);
        marker.bindPopup(doMarker(i));
        marker.addTo(cluster);



    }


    function doMarker(i) {

        let popup="";
        popup+= "<h1>Marker</h1>\
        <ul>\
        <li> Location : " + data[i].LocationName + "</li>\
        <li> Date : " + data[i].Dy + "/" + data[i].Mo + " " +  data[i].Year + "</li>\
        <li> Earthquake Magnitude : " + data[i].EarthquakeMagnitude+ "</li>\
        <li> Maximum Water Height : " + data[i].MaximumWaterHeight + "m" + "</li>\
        <li>Total Deaths : " + data[i].TotalDeaths + "</li>\
        </ul>";
        return popup;
    }
})



//json let coordinates = data[i].geometry.coordinates
//          L.marker(coordinates).addTo(map);       






/*
//Graphiques
function drawCharts (divID, myData) {

    let chart = new CanvasJS.Chart(divID, {
        animationEnabled: true,
        title: {
            text: "Daily High Temperature at Different Beaches"
        },
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Temperature (in °C)",
            suffix: " °C"
        },
        legend: {
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        toolTip: {
            shared: true
        },
       data : myData
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}

let data1 = [{
    name: "Myrtle Beach",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2017, 6, 24), y: 31 },
        { x: new Date(2017, 6, 25), y: 31 },
        { x: new Date(2017, 6, 26), y: 29 },
        { x: new Date(2017, 6, 27), y: 29 },
        { x: new Date(2017, 6, 28), y: 31 },
        { x: new Date(2017, 6, 29), y: 30 },
        { x: new Date(2017, 6, 30), y: 29 }
    ]
},
{
    name: "Martha Vineyard",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2017, 6, 24), y: 20 },
        { x: new Date(2017, 6, 25), y: 20 },
        { x: new Date(2017, 6, 26), y: 25 },
        { x: new Date(2017, 6, 27), y: 25 },
        { x: new Date(2017, 6, 28), y: 25 },
        { x: new Date(2017, 6, 29), y: 25 },
        { x: new Date(2017, 6, 30), y: 25 }
    ]
},
{
    name: "Nantucket",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2017, 6, 24), y: 22 },
        { x: new Date(2017, 6, 25), y: 19 },
        { x: new Date(2017, 6, 26), y: 23 },
        { x: new Date(2017, 6, 27), y: 24 },
        { x: new Date(2017, 6, 28), y: 24 },
        { x: new Date(2017, 6, 29), y: 23 },
        { x: new Date(2017, 6, 30), y: 23 }
    ]
}]

/*Pour data 2*/
/*
let dataPoints= [
    {
    x: new Date(2017, 6, 24),
    y: 1
    }  
]
for (let i=0; i<100;i++){
dataPoints.push(
    {
    x: new Date(2017+i, 6, 28),
    y: Math.random()
    }
)
}

let data2 = [{
    name: "Myrtle Beach",
    type: "column",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: dataPoints
    
},
{
    name: "Martha Vineyard",
    type: "column",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2017, 6, 24), y: 20 },
        { x: new Date(2017, 6, 25), y: 20 },
        { x: new Date(2017, 6, 26), y: 25 },
        { x: new Date(2017, 6, 27), y: 25 },
        { x: new Date(2017, 6, 28), y: 25 },
        { x: new Date(2017, 6, 29), y: 25 },
        { x: new Date(2017, 6, 30), y: 25 }
    ]
}]

drawCharts(chartContainer, data1);
drawCharts(chartContainer2, data2);
*/
