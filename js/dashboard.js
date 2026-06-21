// dashboard tabs + rendering
function setTab(tab) {
  document.querySelectorAll('.tab').forEach(function(t){ t.classList.toggle('active', t.dataset.tab===tab); });
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.toggle('active', p.id==='p-'+tab); });
}

function renderDashboard() {
  document.getElementById('p-bookings').innerHTML = bookings.length ?
    bookings.map(function(b) {
      return '<div class="row"><b>'+b.service+'</b> · '+b.provider+'<br><small>'+b.address+' · '+new Date(b.time).toLocaleString()+'</small></div>';
    }).join('') : '<p class="empty">No bookings yet.</p>';

  document.getElementById('p-saved').innerHTML = saved.length ?
    saved.map(function(id) {
      var l = listings.find(function(x){return x.id===id});
      return l ? '<div class="row" style="cursor:pointer" onclick="openListing('+l.id+')"><b>'+l.title+'</b><br><small>'+l.area+' · NPR '+l.price.toLocaleString()+'/mo</small></div>' : '';
    }).join('') : '<p class="empty">No saved listings.</p>';

  document.getElementById('p-rsvps').innerHTML = rsvps.length ?
    rsvps.map(function(id) {
      var ev = events.find(function(e){return e.id===id});
      return ev ? '<div class="row"><b>'+ev.title+'</b><br><small>'+ev.loc+'</small></div>' : '';
    }).join('') : '<p class="empty">No RSVPs.</p>';
}
