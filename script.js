mapboxgl.accessToken = 
'pk.eyJ1IjoiY2p0cmFoZXkiLCJhIjoiY2wxdTNidDJjMjk2dzNjcGMzYnlsYmE0NyJ9.5E3DgU4t_ILD4KcxSplUbg';

navigator.geolocation.getCurrentPosition(successLocation, errLocation, {
    enableHighAccuracy: true
});
function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15,
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiY2p0cmFoZXkiLCJhIjoiY2wxdTNidDJjMjk2dzNjcGMzYnlsYmE0NyJ9.5E3DgU4t_ILD4KcxSplUbg',
      });
      
      map.addControl(directions, 'top-left');
}
