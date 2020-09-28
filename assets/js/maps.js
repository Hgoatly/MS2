//Google Maps and Marker Cluster code as instructed on CI 'Resume' walkthrough, and on Google Maps documentation.
//Code for how Info Windows can be used in conjunction with Marker Clusters found in an answer on 'Stack Overflow':
//https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow.

function initMap() {
       
    var map = new google.maps.Map(document.getElementById("map"), {
              zoom: 8.15,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

    var lakeMap = new google.maps.Map(document.getElementById("lake-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
           });
         
     var nationalParksMap = new google.maps.Map(document.getElementById("national-parks-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

     var forestsMap = new google.maps.Map(document.getElementById("forests-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

          var eastCoastMap = new google.maps.Map(document.getElementById("east-coast-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

          var westCoastMap = new google.maps.Map(document.getElementById("west-coast-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

           var southCoastMap = new google.maps.Map(document.getElementById("south-coast-map"), {
              zoom: 7.5,
              center: {
                  lat: 55.6348,
                  lng: 13.7034
              }
          });

          var malmoMap = new google.maps.Map(document.getElementById("malmo-map"), {
              zoom: 13,
              center: {
                  lat: 55.6050,
                  lng: 13.0038
              }
          });

          var helsingborgMap = new google.maps.Map(document.getElementById("helsingborg-map"), {
              zoom: 13,
              center: {
                  lat: 56.0465,
                  lng: 12.6945
              }
          });

          var lundMap = new google.maps.Map(document.getElementById("lund-map"), {
              zoom: 13,
              center: {
                  lat: 55.7047,
                  lng: 13.1910
              }
          });

      var infoWin = new google.maps.InfoWindow();

      var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var locations = [
          //Lakes and Forests coordinates
          {lat: 56.2679, lng: 14.3251, info: "<a class='info-header' href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Lake Immeln</a>"},
          {lat: 56.2267, lng: 13.2833, info: "<a class='info-header' href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Hjälmsjön</a>"},
          {lat: 55.9833, lng:14.2167, info:  "<a class='info-header' href='https://sv.wikipedia.org/wiki/Hammarsj%C3%B6n' target='_blank'>Hammarsjön</a>"},
          {lat: 56.0166, lng: 13.2166, info: "<a class='info-header' href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>Sö‎deråsen</a>"},
          {lat: 55.6562, lng: 14.2687, info: "<a class='info-header' href='http://www.nationalparksofsweden.se/choose-park---list/stenshuvud-national-park/' target='_blank'>Stenshuvud</a>"},
          {lat: 55.6926, lng: 13.3600, info: "<a class='info-header' href='https://skrylle.se/' target='_blank'>Skrylle</a>"},
          {lat: 55.5803, lng: 13.4284, info: "<a class='info-header' href='https://www.lansstyrelsen.se/skane/besoksmal/naturreservat/lund-svedala/hackeberga-naturvardsomrade.html' target='_blank'>Häckeberga</a>"},
          {lat: 55.8785, lng: 13.6208, info: "<a class='info-header' href='https://www.skanskalandskap.se/strovomraden/fulltofta' target='_blank'>Fulltofta</a>"},
          //Beach coordinates
          {lat: 55.6850, lng: 14.2266, info: "<a class='info-header' href='https://www.kiviksturism.se/en/' target='_blank'>Kivik</a>"},
          {lat: 55.6420, lng: 14.2616, info: "<a class='info-header' href='http://www.knabackshusen.se/index-en.html' target='_blank'>Knäbäckshusen</a>"},
          {lat: 55.8812, lng: 14.2282, info: "<a class='info-header' href='https://yngsjo.weebly.com/english.html' target='_blank'>Yngsjö</a>"},
          {lat: 55.3971, lng: 12.8415, info: "<a class='info-header' href='http://vellinge.com/en/towns/falsterbo' target='_blank'>Falsterbo</a>"},
          {lat: 56.2234, lng: 12.7103, info: "<a class='info-header' href='https://www.hoganas.se/Invanare/upplev/hemester-i-kullabygden/salta-bad/farhultsbaden/?_t_id=3QWvsJzxjgGH4V6QB7qJqA%3d%3d&_t_q=farhultsbaden&_t_tags=language%3asv%2csiteid%3aa23bdda3-3b1d-4830-a634-c32f5a865af6&_t_ip=192.168.48.128&_t_hit.id=Hoganas_Publik_Models_Pages_Page/_6d43a5bb-fd09-4b9e-a826-950e8d2274ac_sv&_t_hit.pos=3' target='_blank'>Farhultsbaden</a>"},
          {lat: 55.6782, lng: 13.0588, info: "<a class='info-header' href='https://www.guidebook-sweden.com/en/guidebook/destination/lomma-norra-badplats-sandy-beach-in-lomma' target='_blank'>Lomma Norra Badplats</a>"},
          {lat: 55.3385, lng: 13.3598, info: "<a class='info-header' href='https://www.visittrelleborg.se/en/smygehuk/' target='_blank'>Smygehuk</a>"},
          {lat: 55.3867, lng: 14.1932, info: "<a class='info-header' href='https://visitskane.com/outdoors-adventure/sandhammaren-beach' target='_blank'>Sandhammaren</a>"},
          {lat: 55.4250, lng: 13.8491, info: "<a class='info-header' href='https://www.ystad.se/fritid/havsbad/' target='_blank'>Ystad Sandskog</a>"},
          //Malmo coordinates
          {lat: 55.6050, lng: 13.0038, info: "<a class='info-header' href='https://visitsweden.com/where-to-go/southern-sweden/malmo/' target='_blank'>Malmö</a>"},
          {lat: 55.5964, lng: 12.9963, info: "<a class='info-header' href='https://www.malmoopera.se/in-english'>Malmö Opera</a>"},
          {lat:55.6077, lng: 12.9936, info: "<a class='info-header' href='https://malmolive.se/en' target='_blank'>Malmö Concert Hall</a>"},
          {lat: 55.6048, lng: 12.9876, info: "<a class='info-header' href='https://www.guidebook-sweden.com/en/guidebook/destination/malmoehus-slott-castle-in-malmoe' target='_blank'>Malmö Castle</a>"},
          {lat: 55.6074489, lng: 13.0075645, info: "<a class='info-header' href='https://disgustingfoodmuseum.com/' target='_blank'>Disgusting Food Museum</a>"},
          //Helsingborg coordinates
          {lat: 56.0465, lng: 12.6945, info: "<a class='info-header' href='https://visithelsingborg.com/?lang=en' target='_blank'>Helsingborg</a>"},
          {lat: 56.0478, lng: 12.6891, info: "<a class='info-header' href='https://dunkerskulturhus.se/' target='_blank'>Dunkers Culture House</a>"},
          {lat: 56.0498, lng: 12.6893, info: "<a class='info-header'href='https://www.helsingborgskonserthus.se/' target='_blank'>Helsingborg Concert House</a>"},
          {lat: 56.0839, lng: 12.6596, info: "<a class='info-header' href='https://sofiero.se/en/' target='_blank'>Sofiero Castle</a>"},
          //Lund coordinates
          {lat: 55.70587, lng: 13.1932, info: "<a class='info-header' href='https://www.lund.se/en/#/' target='_blank'>Lund</a>"},
          {lat: 55.7041, lng: 13.1937, info: "<a class='info-header' href='https://lundsdomkyrka.se/english/' target='_blank'>Lutheren Cathedral</a>"},
          {lat: 55.7046, lng: 13.1965, info: "<a class='info-header' href='kulturen.com'>Kulturen</a>"},
          {lat: 55.6996, lng: 13.1879, info: "<a class='info-header' href='http://www.vattenhallen.lth.se/english/the-planetarium/' target='_blank'>Lund Planetarium</a>"}
        ];
     
        var lakeLocations = locations.slice(0,3);
        var nationalParksLocations = locations.slice(3,5);
        var forestLocations = locations.slice(5,8);
        var eastCoastLocations = locations.slice(8,11);
        var westCoastLocations = locations.slice(11,14);
        var southCoastLocations = locations.slice(14,17);
        var malmoLocations = locations.slice(18,22);
        var helsingborgLocations = locations.slice(23,27);
        var lundLocations = locations.slice(27,31);

        var markers = locations.map(function(location, i) {
            var marker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
            });
        
            google.maps.event.addListener(marker, 'click', function() {
            infoWin.setContent(location.info);
            infoWin.open(map, marker);
            })
            return marker;
            });

        var lakeMarkers = lakeLocations.map(function(location, i) {
            var lakeMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(lakeMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, lakeMarker);
            })
            return lakeMarker;
            });
        

        var nationalParksMarkers = nationalParksLocations.map(function(location, i) {
            var nationalParksMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(nationalParksMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, nationalParksMarker);
            })
            return nationalParksMarker;
        });

        var forestsMarkers = forestLocations.map(function(location, i) {
            var forestMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(forestMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, forestMarker);
            })
            return forestMarker;
        });

        var eastCoastMarkers = eastCoastLocations.map(function(location, i) {
            var eastCoastMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(eastCoastMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, eastCoastMarker);
            })
            return eastCoastMarker;
        });

         var westCoastMarkers = westCoastLocations.map(function(location, i) {
            var westCoastMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(westCoastMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, westCoastMarker);
            })
            return westCoastMarker;
        });

        var southCoastMarkers = southCoastLocations.map(function(location, i) {
            var southCoastMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(southCoastMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, southCoastMarker);
            })
            return southCoastMarker;
        });

         var malmoMarkers = malmoLocations.map(function(location, i) {
            var malmoMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(malmoMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, malmoMarker);
            })
            return malmoMarker;
        });
        
         var helsingborgMarkers = helsingborgLocations.map(function(location, i) {
            var helsingborgMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(helsingborgMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, helsingborgMarker);
            })
            return helsingborgMarker;
        });

         var lundMarkers = lundLocations.map(function(location, i) {
            var lundMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(lundMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, lundMarker);
            })
            return lundMarker;
        });

      var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var lakeCluster = new MarkerClusterer(lakeMap, lakeMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var nationalParksCluster = new MarkerClusterer(nationalParksMap, nationalParksMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var forestsCluster = new MarkerClusterer(forestsMap, forestsMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(eastCoastMap, eastCoastMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
        
        var markerCluster = new MarkerClusterer(westCoastMap, westCoastMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
        
        var markerCluster = new MarkerClusterer(southCoastMap, southCoastMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(malmoMap, malmoMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(helsingborgMap, helsingborgMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(lundMap, lundMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})    
        }
/*google.maps.event.addDomListener(window, "load", initMap); */