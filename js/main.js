// shared state + init
var saved = JSON.parse(localStorage.getItem('saved') || '[]');
var bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
var rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
var customListings = JSON.parse(localStorage.getItem('customListings') || '[]');
var customEvents = JSON.parse(localStorage.getItem('customEvents') || '[]');

function saveState() {
  localStorage.setItem('saved', JSON.stringify(saved));
  localStorage.setItem('bookings', JSON.stringify(bookings));
  localStorage.setItem('rsvps', JSON.stringify(rsvps));
  localStorage.setItem('customListings', JSON.stringify(customListings));
  localStorage.setItem('customEvents', JSON.stringify(customEvents));
}

var adminLoggedIn = false;
var adminId = 'admin';
var adminPassword = 'gharSathi123';

function toast(msg) {
  var el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show';
  setTimeout(function(){ el.className = 'toast'; }, 3000);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function openAdminLogin() {
  document.getElementById('adminLoginModal').classList.add('open');
}

function adminLogin(e) {
  e.preventDefault();
  var user = document.getElementById('adminUser').value.trim();
  var pass = document.getElementById('adminPass').value;

  if (user === adminId && pass === adminPassword) {
    adminLoggedIn = true;
    closeModal('adminLoginModal');
    toast('Admin login successful');
    document.getElementById('admin').scrollIntoView({ behavior: 'smooth' });
    updateAdminStats();
  } else {
    toast('Invalid admin credentials');
  }
}

function logoutAdmin() {
  adminLoggedIn = false;
  toast('Admin logged out');
}

function getNextListingId() {
  var maxId = 0;
  listings.concat(customListings).forEach(function(item) {
    if (item.id > maxId) maxId = item.id;
  });
  return maxId + 1;
}

function getNextEventId() {
  var maxId = 0;
  events.concat(customEvents).forEach(function(item) {
    if (item.id > maxId) maxId = item.id;
  });
  return maxId + 1;
}

function addAdminListing() {
  if (!adminLoggedIn) {
    toast('Login as admin first');
    return;
  }

  var title = document.getElementById('adminListingTitle').value.trim();
  var type = document.getElementById('adminListingType').value;
  var area = document.getElementById('adminListingArea').value.trim();
  var price = parseInt(document.getElementById('adminListingPrice').value, 10);
  var beds = parseInt(document.getElementById('adminListingBeds').value, 10) || 1;
  var baths = parseInt(document.getElementById('adminListingBaths').value, 10) || 1;

  if (!title || !type || !area || !price || price <= 0) {
    toast('Enter valid listing details');
    return;
  }

  var id = getNextListingId();
  var listing = {
    id: id,
    title: title,
    type: type,
    area: area,
    price: price,
    beds: beds,
    baths: baths,
    lat: 27.7,
    lng: 85.33
  };

  customListings.push(listing);
  listings.push(listing);
  saveState();
  renderListings();
  updateAdminStats();
  toast('Listing added');
  document.getElementById('adminListingTitle').value = '';
  document.getElementById('adminListingArea').value = '';
  document.getElementById('adminListingPrice').value = '';
  document.getElementById('adminListingBeds').value = '';
  document.getElementById('adminListingBaths').value = '';
}

function addAdminEvent() {
  if (!adminLoggedIn) {
    toast('Login as admin first');
    return;
  }

  var title = document.getElementById('adminEventTitle').value.trim();
  var date = document.getElementById('adminEventDate').value;
  var loc = document.getElementById('adminEventLocation').value.trim();

  if (!title || !date || !loc) {
    toast('Enter valid event details');
    return;
  }

  var id = getNextEventId();
  var eventItem = {
    id: id,
    title: title,
    date: date,
    loc: loc
  };

  customEvents.push(eventItem);
  events.push(eventItem);
  saveState();
  renderEvents();
  updateAdminStats();
  toast('Event added');
  document.getElementById('adminEventTitle').value = '';
  document.getElementById('adminEventDate').value = '';
  document.getElementById('adminEventLocation').value = '';
}

function updateAdminStats() {
  if (!adminLoggedIn) {
    toast('Login as admin first');
    return;
  }

  document.getElementById('adminListingsCount').textContent = listings.length;
  document.getElementById('adminProvidersCount').textContent = providers.length;
  document.getElementById('adminEventsCount').textContent = events.length;
  document.getElementById('adminActivityCount').textContent = saved.length + ' saved / ' + bookings.length + ' bookings / ' + rsvps.length + ' RSVPs';
  document.getElementById('adminDetails').innerHTML =
    '<div class="admin-log"><strong>Admin ID:</strong> ' + adminId + '</div>' +
    '<div class="admin-log"><strong>Recent Booking:</strong> ' + (bookings[0] ? bookings[0].service + ' at ' + bookings[0].address : 'None') + '</div>' +
    '<div class="admin-log"><strong>Added Listings:</strong> ' + customListings.length + ' new listing(s)</div>';
}

// populate area dropdowns & boot
window.onload = function() {
  var h = document.getElementById('heroArea');
  var f = document.getElementById('areaFilter');
  areas.forEach(function(a) {
    h.innerHTML += '<option value="'+a+'">'+a+'</option>';
    f.innerHTML += '<option value="'+a+'">'+a+'</option>';
  });
  if (customListings.length) {
    customListings.forEach(function(listing) {
      listings.push(listing);
    });
  }
  renderListings();
  initMap();
  renderServices();
  renderEvents();
  renderDashboard();
};
