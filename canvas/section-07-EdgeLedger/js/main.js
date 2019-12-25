// Initialize and add the map
function initMap() {
    // Your Location
    const loc = { lat: 40.7122831, lng: -74.0148694 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 16,
        center: loc
    });
    // The market, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map});
}

// 40.7122831,-74.0148694,18.75

// Sticky Menu Background
window.addEventListener('scroll', function() {
    if(window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);
    }
});