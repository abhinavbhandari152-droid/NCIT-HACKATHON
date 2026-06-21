// events + RSVP
var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function renderEvents() {
  document.getElementById('evGrid').innerHTML = events.map(function(ev) {
    var d = new Date(ev.date + 'T00:00:00');
    var going = rsvps.indexOf(ev.id) > -1;
    return '<div class="ev-card">' +
      '<div class="ev-date">'+d.getDate()+'<br><small>'+MONTHS[d.getMonth()]+'</small></div>' +
      '<div class="ev-info"><h4>'+ev.title+'</h4>' +
      '<p>📍 '+ev.loc+'</p>' +
      '<button class="btn '+(going?'btn-done':'')+'" onclick="toggleRsvp('+ev.id+')">'+(going?'✓ Going':'RSVP')+'</button></div></div>';
  }).join('');
}

function toggleRsvp(id) {
  var i = rsvps.indexOf(id);
  if (i > -1) rsvps.splice(i,1); else rsvps.push(id);
  saveState(); renderEvents(); renderDashboard();
  if (i === -1) toast("RSVP'd!");
}
