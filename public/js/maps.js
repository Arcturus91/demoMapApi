window.addEventListener('load', () => {
    const casa= {
      lat: -12.0547601,
      lng: -77.0909803
    };
  
   
   //initicializamos la variable map 
  
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: casa
    });

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map,
      });








})