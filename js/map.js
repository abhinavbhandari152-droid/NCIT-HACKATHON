// leaflet map setup
var map, markers = [], mapMode = 'homes';

function initMap() {
  map = L.map('mapEl', {scrollWheelZoom: false}).setView([27.7, 85.33], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);
  renderMap();
}

function renderMap() {
  markers.forEach(function(m){ map.removeLayer(m); });
  markers = [];
  var list = document.getElementById('mapList');
  var data = mapMode === 'homes' ? listings : providers;
  var color = mapMode === 'homes' ? '#C1542C' : '#5C7A5E';

  list.innerHTML = data.map(function(d, i) {
    var label = d.title
      ? d.title + ' · NPR ' + d.price.toLocaleString() + '/mo'
      : d.name + ' · ' + d.service + ' · ★' + d.rating;
    return '<div class="map-item" onclick="focusMarker('+i+')">'+label+'</div>';
  }).join('');

  data.forEach(function(d) {
    var m = L.circleMarker([d.lat, d.lng], {radius:7, color:color, fillColor:color, fillOpacity:0.9})
      .addTo(map).bindPopup('<b>'+(d.title||d.name)+'</b><br>'+d.area);
    markers.push(m);
  });
}

function setMapMode(mode) {
  mapMode = mode;
  document.getElementById('btnHomes').classList.toggle('active', mode==='homes');
  document.getElementById('btnProviders').classList.toggle('active', mode==='providers');
  renderMap();
}

function focusMarker(i) {
  map.flyTo(markers[i].getLatLng(), 15);
  setTimeout(function(){ markers[i].openPopup(); }, 600);
}
