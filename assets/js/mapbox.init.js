mapboxgl.accessToken = 'pk.eyJ1IjoibXR0aHAiLCJhIjoiY2twbHBnczc3MjdudTJwcml1dTFiZGNpNSJ9.ezBHPw4IUqVkpciAEsNCEQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [6.1713572,49.1186524], // starting position
    zoom: 13 // starting zoom
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'Mairie de Metz - Hôtel de Ville'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat([6.1713572,49.1186524])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// disable map zoom when using scroll
map.scrollZoom.disable();
