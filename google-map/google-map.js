function initMap () {
  var uluru = {lat: 38.0343866, lng: -121.87970819999998};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru

  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};