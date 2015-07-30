
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
directionsDisplay = new google.maps.DirectionsRenderer();
var chicago = new google.maps.LatLng(39.950593, -75.161783);
var mapOptions = {
zoom: 11,
center: chicago
}


map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


// Try HTML5 geolocation start
if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  var pos = new google.maps.LatLng(position.coords.latitude,
                                   position.coords.longitude);

  var infowindow = new google.maps.InfoWindow({
    map: map,
    position: pos,
    content: 'Location found using HTML5.'
  });

  map.setCenter(pos);
}, function() {
  handleNoGeolocation(true);
});
} else {
// Browser doesn't support Geolocation
handleNoGeolocation(false);
}
}

function handleNoGeolocation(errorFlag) {
if (errorFlag) {
var content = 'Error: The Geolocation service failed. Centering map on Philly';
} else {
var content = 'Error: Your browser doesn\'t support geolocation.';
}

var options = {
map: map,
position: new google.maps.LatLng(60, 105),
content: content
};

var infowindow = new google.maps.InfoWindow(options);
map.setCenter(options.position);

var philly = new google.maps.LatLng(39.950593, -75.161783);
var mapOptions = {
zoom: 11,
center: philly
}
var styleArray = [
{
  featureType: "all",
  stylers: [
    { saturation: -80 }
  ]
},{
  featureType: "road.arterial",
  elementType: "geometry",
  stylers: [
    { hue: "#00ffee" },
    { saturation: 50 }
  ]
},{
  featureType: "poi.business",
  elementType: "labels",
  stylers: [
    { visibility: "off" }
  ]
}

];
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
map.setOptions({styles: styleArray});

//Try HTML5 geolocation end

directionsDisplay.setMap(map);
}

function calcRoute() {
var start = document.getElementById('start').value;
var end = document.getElementById('end').value;
var waypts = [];
var checkboxArray = document.getElementById('waypoints');
for (var i = 0; i < checkboxArray.length; i++) {
if (checkboxArray.options[i].selected == true) {
  waypts.push({
      location:checkboxArray[i].value,
      stopover:true});
}
}

var selectedMode = document.getElementById('mode').value;

var request = {
  origin: start,
  destination: end,
  waypoints: waypts,
  optimizeWaypoints: true,
 // travelMode: google.maps.TravelMode.DRIVING
  travelMode: google.maps.TravelMode[selectedMode]
};
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
  directionsDisplay.setDirections(response);
  var route = response.routes[0];
  var summaryPanel = document.getElementById('directions_panel');
  summaryPanel.innerHTML = '';
  // For each route, display summary information.
  for (var i = 0; i < route.legs.length; i++) {
    var routeSegment = i + 1;
    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
    summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
    summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
    summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
  }
}
});
}



google.maps.event.addDomListener(window, 'load', initialize);
