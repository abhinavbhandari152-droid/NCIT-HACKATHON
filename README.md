    # 🏠 GharSathi

    Rent. Settle. Sorted.

    A one-stop platform for finding rentals and booking home services in Kathmandu Valley.

    ## The Problem

    Finding a place to rent in Kathmandu Valley is honestly a nightmare. You end up scrolling through random Facebook groups, calling broker numbers taped to poles, and visiting sketchy listings with zero real info. And once you finally move in — good luck finding a plumber when your kitchen tap starts leaking at 10pm.

    There's no single platform that handles both finding a home and maintaining it, especially one built for the Kathmandu Valley context.

    ## Our Solution

    GharSathi combines everything a renter in KTM Valley needs:

    -  Property listings with filters by type (room/flat/house) and area
    -  Interactive map to see exactly where homes and providers are
    -  Home services — book plumbers, electricians, cleaners with one click
    -  Community events — RSVP to open houses and tenant meetups
    - Dashboard — track your bookings, saved places, and RSVPs

    All data persists in `localStorage` so nothing is lost on refresh.

    ## Tech Stack

    Tech  What we used it for 
    HTML / CSS / JS  Core frontend (vanilla, no frameworks) 
    Leaflet.js  Interactive map with markers 
    localStorage API  Persisting user data across sessions 
    Google Fonts  Typography (Work Sans + Fraunces) 

    No backend, no build tools, no npm — just open `index.html` and it works.

    ## Project Structure


    index.html        → main page layout + modals
    style.css         → all styling
    js/
    Data.js       → sample listings, providers, events
    main.js       → init, state management, toast
    listings.js   → listing cards, filters, search
    map.js        → leaflet map + marker interactions
    booking.js    → service booking flow
    events.js     → event cards + RSVP
    dashboard.js  → dashboard tabs


    ## Features Working

    -  Browse listings with type & area filters
    -  Hero search with budget filter
    -  Interactive Leaflet map with sidebar
    -  Toggle between homes and service providers on map
    -  Click sidebar item → map flies to it and opens popup
    -  Book home services with provider matching
    -  RSVP to events
    -  Dashboard showing bookings / saved / RSVPs
    -  All user data saved in localStorage
    -  Responsive layout

    ## What We'd Add With More Time

    - Firebase backend with real database
    - User login / signup
    - Image uploads for listings
    - Chat between tenants and landlords
    - Online payment for deposits
    - Push notifications for booking updates
    - Review/rating system for providers

    ## How to Run

    1. Download / clone this repo
    2. Open index.html in any browser
    3. Done


    ## Team

    - Abhinav Bhandari
    - Ridesh Mudhbhari
    - Prabesh Shrestha

    ---

    Made by The Ghostline at NCIT Hackathon · Kathmandu · June 2026
