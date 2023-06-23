 
 /*// JavaScript para cargar el mapa
 let map;

  function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
     zoom: 8,
     });
  }*/

/*window.initMap = initMap;*/
      function initMap() {
        // Coordenadas del mapa
        var lon = -8580000; // -
        var lat = -1342000; // |
  
        // Opciones de configuración del mapa
        var map = new OpenLayers.Map("map-container");
        var mapnik = new OpenLayers.Layer.OSM();
  
        // Centrar el mapa en las coordenadas especificadas y establecer el nivel de zoom
        var lonLat = new OpenLayers.LonLat(lon, lat).transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
        var zoom = 13.2;
        // Añadir capas al mapa y establecer la vista
        map.addLayer(mapnik);
        map.setCenter(lonLat, zoom);
      }

      function getLocation(){
        navigator.geolocation.getCurrentPosition();
      }