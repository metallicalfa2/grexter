// MACBOOK-23-APRIL-2015
// SHUBHAM RATHI

//this will exceute loadScript when page loads
window.onload = loadScript;

//Coordinates entered are for BITS GOA
var lat=15.3908 , longi=73.8775;

//onclick submit button execute() 
function execute(){
	lat = document.getElementById('latitude').value;
	longi = document.getElementById('longitude').value;
	initialize_maps();
}

//this will append <script> to html and callback initialize_maps();
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize_maps';
  document.body.appendChild(script);
}

function initialize_maps() {
  // create object 
  var map_object = {
  center:new google.maps.LatLng(lat,longi),
  zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,  
  panControl:true,
  zoomControl:true,
  mapTypeControl:true,
  scaleControl:true,
  streetViewControl:true,
  overviewMapControl:true,
  rotateControl:true, 
  };

  // create map object that'll create map inside div with id google_map with object properties map_object 
  var map=new google.maps.Map(document.getElementById("google_map"),map_object);

  //create marker_pointer object to point to selected coordinates  
  
  var marker_pointer=new google.maps.Marker({
  position:map_object.center,
  });
  marker_pointer.setMap(map);
  
  //info window.
  var information = new google.maps.InfoWindow({
  content:"Enterred Coordinates are " + "(" + lat +  " N," + longi +" E"+")",
  });

  google.maps.event.addListener(marker_pointer, 'click', function() {
  information.open(map,marker_pointer);
  });
}

//will execute initialize_maps() on document load
// google.maps.event.addDomListener(window, 'load', initialize_maps);


