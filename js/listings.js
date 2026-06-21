// listing rendering, filtering, modal, save
var typeFilter = '', areaFilter = '', budgetFilter = null;

function renderListings() {
  var grid = document.getElementById('listings');
  var items = listings.filter(function(l) {
    return (!typeFilter || l.type === typeFilter) &&
           (!areaFilter || l.area === areaFilter) &&
           (!budgetFilter || l.price <= budgetFilter);
  });
  // update the count for better UX
  var countEl = document.getElementById('listingCount');
  if (countEl) {
    countEl.textContent = 'Showing ' + items.length + ' homes matching your criteria';
  }

  grid.innerHTML = items.length ? items.map(function(l) {
    return '<div class="card" onclick="openListing('+l.id+')">' +
      '<div class="card-img bg-'+l.type.toLowerCase()+'"><span class="badge">'+l.type+'</span>🏠</div>' +
      '<div class="card-info"><h4>'+l.title+'</h4>' +
      '<p>📍 '+l.area+' · NPR '+l.price.toLocaleString()+'/mo</p>' +
      '<span class="view">View →</span></div></div>';
  }).join('') : '<p class="empty">No listings match your filters.</p>';
}

function openListing(id) {
  var l = listings.find(function(x){return x.id===id});
  var s = saved.indexOf(id) > -1;
  document.getElementById('modalContent').innerHTML =
    '<div class="card-img bg-'+l.type.toLowerCase()+'" style="height:140px;border-radius:12px 12px 0 0;font-size:48px">🏠</div>' +
    '<div style="padding:16px">' +
    '<h3>'+l.title+'</h3>' +
    '<p style="color:#6B6657;margin:4px 0">📍 '+l.area+' · 🛏 '+l.beds+' bed · 🛁 '+l.baths+' bath</p>' +
    '<p style="font-size:20px;font-weight:700;margin:8px 0">NPR '+l.price.toLocaleString()+'/mo</p>' +
    '<div style="display:flex;gap:8px;margin-top:12px">' +
    '<button class="btn btn-primary" onclick="bookVisit('+l.id+')">Book visit</button>' +
    '<button class="btn" id="saveBtn" onclick="toggleSave('+l.id+')">'+(s?'✓ Saved':'Save')+'</button></div></div>';
  document.getElementById('listingModal').classList.add('open');
}

function toggleSave(id) {
  var i = saved.indexOf(id);
  if (i > -1) saved.splice(i,1); else saved.push(id);
  saveState(); renderDashboard();
  var btn = document.getElementById('saveBtn');
  if (btn) btn.textContent = saved.indexOf(id) > -1 ? '✓ Saved' : 'Save';
}

function bookVisit(id) {
  if (saved.indexOf(id) === -1) { saved.push(id); saveState(); }
  closeModal('listingModal'); renderDashboard();
  toast('Visit requested!');
}

function setType(el) {
  document.querySelectorAll('.chip').forEach(function(c){c.classList.remove('active')});
  el.classList.add('active');
  typeFilter = el.dataset.type || '';
  renderListings();
}

function heroSearch() {
  typeFilter = document.getElementById('heroType').value;
  areaFilter = document.getElementById('heroArea').value;
  var b = document.getElementById('heroBudget').value;
  budgetFilter = b ? parseInt(b) : null;
  document.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('active', (c.dataset.type||'')===typeFilter)});
  document.getElementById('areaFilter').value = areaFilter;
  renderListings();
  document.getElementById('browse').scrollIntoView({behavior:'smooth'});
}
