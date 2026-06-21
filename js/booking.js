// service cards + booking form
var bookingTarget = '';

function renderServices() {
  document.getElementById('svcGrid').innerHTML = services.map(function(s) {
    return '<div class="svc-card">' +
      '<div style="font-size:28px">'+s.icon+'</div>' +
      '<h4>'+s.name+'</h4><p>'+s.desc+'</p>' +
      '<button class="btn btn-primary" onclick="openBooking(\''+s.name+'\')">Book</button></div>';
  }).join('');
}

function openBooking(name) {
  bookingTarget = name;
  document.getElementById('bookingLabel').textContent = 'Book ' + name;
  document.getElementById('bookingForm').reset();
  document.getElementById('bookingModal').classList.add('open');
}

function submitBooking(e) {
  e.preventDefault();
  var match = providers.find(function(p){ return p.service === bookingTarget; });
  // Simulate network delay to make it feel real for the demo
  // TODO: connect to actual Node.js backend after hackathon
  setTimeout(function() {
    bookings.unshift({
      service: bookingTarget,
      address: document.getElementById('bAddr').value,
      time: document.getElementById('bTime').value,
      provider: match ? match.name : 'Next available'
    });
    saveState();
    closeModal('bookingModal');
    renderDashboard();
    toast(bookingTarget + ' booked — ' + (match ? match.name + ' assigned!' : 'We\'ll find someone!'));
  }, 600);
}
