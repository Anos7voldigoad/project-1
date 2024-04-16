function myfun(){
    if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(showposition);
    
    }
    else{
    
    document.getElementById('mymap').innerHTML="No supported";
    
    }
    }
    function showposition(position){
        var lat=position.coords.latitude;
        var lon=position.coords.longitude;
        
    
    
        var latlon=new google.maps.LatLng(lat, lon);
        var mapdiv=document.getElementById('mymap');
        
        
        
        
    var Map=new google.maps.Map(mapdiv,{center:latlon,zoom:16});
        var objformarker={position:latlon,map:Map,title:"You Are Here!"};
        
        var marker=new google.maps.Marker(objformarker);
    
    
        
    }

    function enabled()
 {
  var abc = "Geolocation is not supported in this browser";  // Default message
         if (window.navigator.geolocation) {
                           abc = "Geolocation is supported in this browser";   
										
}
 alert (abc);
 }