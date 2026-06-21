// shared state + init
var saved = JSON.parse(localStorage.getItem('saved') || '[]');
var bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
var rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');

function saveState() {
  localStorage.setItem('saved', JSON.stringify(saved));
  localStorage.setItem('bookings', JSON.stringify(bookings));
  localStorage.setItem('rsvps', JSON.stringify(rsvps));
}

function toast(msg) {
  var el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show';
  setTimeout(function(){ el.className = 'toast'; }, 3000);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// populate area dropdowns & boot
window.onload = function() {
  var h = document.getElementById('heroArea');
  var f = document.getElementById('areaFilter');
  areas.forEach(function(a) {
    h.innerHTML += '<option value="'+a+'">'+a+'</option>';
    f.innerHTML += '<option value="'+a+'">'+a+'</option>';
  });
  renderListings();
  initMap();
  renderServices();
  renderEvents();
  renderDashboard();
};
