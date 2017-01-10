// $(document).ready(function(){
// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
// var map;
// //get data rendered onto the frontend from the backend.
// var markerArray = [];
// var markerCollection = document.getElementsByClassName('marker');
// for (markerName in markerCollection){
//
//   var marker = new google.maps.Marker({
//     position: markerName.value,
//     map: map
//     // icon: icon
//   });
//   markerArray.push(marker);
// };
// var stepDisplay;
//
// function initialize() {
// var renderOptions = {
//     map: map,
//     suppressMarkers : true
//   };
// directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
// var chicago = new google.maps.LatLng(39.950593, -75.161783);
// var mapOptions = {
// zoom: 11,
// center: chicago
// }
//
//
// map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//
// // Try HTML5 geolocation start
// if(navigator.geolocation) {
// navigator.geolocation.getCurrentPosition(function(position) {
//   var pos = new google.maps.LatLng(position.coords.latitude,
//                                    position.coords.longitude);
//
//   var infowindow = new google.maps.InfoWindow({
//     map: map,
//     position: pos,
//     content: 'Location found using HTML5.'
//   });
//
//   map.setCenter(pos);
// }, function() {
//   handleNoGeolocation(true);
// });
// } else {
// // Browser doesn't support Geolocation
// handleNoGeolocation(false);
// }
// }
//
// function handleNoGeolocation(errorFlag) {
// if (errorFlag) {
// var content = 'Error: The Geolocation service failed. Centering map on Philly';
// } else {
// var content = 'Error: Your browser doesn\'t support geolocation.';
// }
//
// var options = {
// map: map,
// position: new google.maps.LatLng(60, 105),
// content: content
//
// };
//
// var infowindow = new google.maps.InfoWindow(options);
// map.setCenter(options.position);
//
// var philly = new google.maps.LatLng(39.950593, -75.161783);
// var mapOptions = {
// zoom: 13,
// center: philly
// }
// var styleArray = [
// {
//   featureType: "all",
//   stylers: [
//     { saturation: -50 }
//   ]
// },{
//   featureType: "road.arterial",
//   elementType: "geometry",
//   stylers: [
//     { hue: "#00ffee" },
//     { saturation: 90 }
//   ]
// },{
//   featureType: "poi.business",
//   elementType: "labels",
//   stylers: [
//     { visibility: "off" }
//   ]
// },{
//   featureType: "road.highway",
//   elementType: "geometry",
//   stylers: [
//     { hue: "#317a75" },
//     { saturation: -40 }
//   ]
// },{
//   featureType: "landscape.manmade",
//   elementType: "fill",
//   stylers: [
//     { saturation: 5 }
//   ]
// }
//
// ];
// map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// map.setOptions({styles: styleArray});
//
// //Try HTML5 geolocation end
// stepDisplay = new google.maps.InfoWindow();
// directionsDisplay.setMap(map);
// }
//
// function calcRoute() {
// var start = document.getElementById('start').value;
// var end = document.getElementById('end').value;
// var waypts = [];
// var checkboxArray = document.getElementById('waypoints');
// for (var i = 0; i < checkboxArray.length; i++) {
// if (checkboxArray.options[i].selected == true) {
//     waypts.push({
//         location:checkboxArray[i].value,
//         stopover:true});
//   }
// }
//
// var selectedMode = document.getElementById('mode').value;
//
// var request = {
//   origin: start,
//   destination: end,
//   waypoints: waypts,
//   optimizeWaypoints: true,
//  // travelMode: google.maps.TravelMode.DRIVING
//   travelMode: google.maps.TravelMode[selectedMode]
// };
// directionsService.route(request, function(response, status) {
// if (status == google.maps.DirectionsStatus.OK) {
//   directionsDisplay.setDirections(response);
//   showSteps(response);
//   console.log(response);
//   var route = response.routes[0];
//   var summaryPanel = document.getElementById('directions_panel');
//   summaryPanel.innerHTML = '';
//   // For each route, display summary information.
//   for (var i = 0; i < route.legs.length; i++) {
//     var routeSegment = i + 1;
//     console.log(route.legs[i].start_location);
//     summaryPanel.innerHTML += '<b>' + checkboxArray[i].id + '</b><br>-------------------------------------------<br>';
// //    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
//     summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//     summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//     summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//   }
// }
// });
//
//   function showSteps(directionResult) {
//     // For each step, place a marker, and add the text to the marker's
//     // info window. Also attach the marker to an array so we
//     // can keep track of it and remove it when calculating new
//     // routes.
// //    console.log(directionResult.routes[0].legs.length);
// //    console.log(directionResult.routes[0].legs[0].start_address);
//     var myRoute = directionResult.routes[0];
//
//     for (var i = 0; i < myRoute.legs.length; i++) {
//       var icon = "images/waypoint.png";
//       console.log(myRoute.legs[i].start_location);
//       if (i == 0) {
//         icon = "images/bookend.png";
//       }
//       var marker = new google.maps.Marker({
//         position: myRoute.legs[i].start_location,
//         map: map,
//         icon: icon
//       });
//       attachInstructionText(marker, myRoute.legs[i].start_address);
//       markerArray.push(marker);
//     }
//     var marker = new google.maps.Marker({
//       position: myRoute.legs[i - 1].end_location,
//       map: map,
//       icon: "images/bookend.png"
//     });
//     markerArray.push(marker);
//
//     google.maps.event.trigger(markerArray[0], "click");
//   }
//
// }
//
//   function attachInstructionText(marker, text) {
//     google.maps.event.addListener(marker, 'click', function() {
//       // Open an info window when the marker is clicked on,
//       // containing the text of the step.
//       stepDisplay.setContent(text);
//       stepDisplay.open(map, marker);
//     });
//   }
// //div.gm-iw -- append button?
// //map-canvas
//   //->gm-style
//
// google.maps.event.addDomListener(window, 'load', initialize);
//
// //get route index? for numbering the icons
// //replace icons
// //set route styles
// //media query - set bar to horizontal for portrait cell phones, realign data fields
// //#8bd3c1;
// //'Lato', 'Helvetica Neue', Helvetica, sans-serif;
// });
