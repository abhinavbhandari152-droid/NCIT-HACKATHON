// sample listing data
var listings = [
  {id:1, title:"Sunny Studio near Boudhanath", type:"Room", area:"Boudha", price:9500, beds:1, baths:1, lat:27.7215, lng:85.362},
  {id:2, title:"2BHK Flat with Balcony", type:"Flat", area:"Jhamsikhel", price:28000, beds:2, baths:2, lat:27.6776, lng:85.3107},
  {id:3, title:"Family House with Garden", type:"House", area:"Baneshwor", price:45000, beds:4, baths:3, lat:27.6913, lng:85.3461},
  {id:4, title:"Shared Room near Thamel", type:"Room", area:"Thamel", price:7000, beds:1, baths:1, lat:27.7154, lng:85.3123},
  {id:5, title:"Modern 1BHK Apartment", type:"Flat", area:"Lazimpat", price:22000, beds:1, baths:1, lat:27.7244, lng:85.3214},
  {id:6, title:"Renovated Bungalow", type:"House", area:"Patan", price:60000, beds:5, baths:4, lat:27.6727, lng:85.3247},
  {id:7, title:"Cozy Rooftop Room", type:"Room", area:"Baluwatar", price:8500, beds:1, baths:1, lat:27.7282, lng:85.3275},
  {id:8, title:"Spacious 3BHK near Ring Road", type:"Flat", area:"Kalanki", price:35000, beds:3, baths:2, lat:27.6939, lng:85.2802},
];

var providers = [
  {name:"Bishal Tamang", service:"Plumbing", area:"Baneshwor", rating:4.8, lat:27.6913, lng:85.3461},
  {name:"Sunita Gurung", service:"Plumbing", area:"Patan", rating:4.9, lat:27.6727, lng:85.3247},
  {name:"Rajan Shrestha", service:"Electrical", area:"Kalanki", rating:4.6, lat:27.6939, lng:85.2802},
  {name:"Anita Rai", service:"Pest Control", area:"Lazimpat", rating:4.8, lat:27.7244, lng:85.3214},
];

var services = [
  {name:"Plumbing", icon:"🔧", desc:"Leaks, taps, pipes"},
  {name:"Electrical", icon:"⚡", desc:"Wiring, switches, fuses"},
  {name:"Cleaning", icon:"🧹", desc:"Deep cleans & upkeep"},
  {name:"Pest Control", icon:"🐜", desc:"Bugs & damp treatment"},
];

var events = [
  {id:1, title:"Open House — Jhamsikhel 2BHK", date:"2026-06-24", loc:"Jhamsikhel"},
  {id:2, title:"Tenant Meetup & Chiya", date:"2026-06-28", loc:"Patan Community Hall"},
  {id:3, title:"Monsoon-Proofing Workshop", date:"2026-07-03", loc:"Online"},
   {id:4, title:"First-Time Renter Q&A", date:"2026-07-06", loc:"Thamel Co-Work Space"},
  {id:5, title:"Landlord-Tenant Rights Talk", date:"2026-07-12", loc:"Baneshwor Library Hall"},
  {id:6, title:"Community Clean-Up Drive", date:"2026-07-18", loc:"Boudha Neighbourhood"},

];

var areas = ["Boudha","Jhamsikhel","Baneshwor","Thamel","Lazimpat","Patan","Kalanki"];
