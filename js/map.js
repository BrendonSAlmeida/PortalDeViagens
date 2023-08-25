feather.replace();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            });
        });
    });

    function initMap() {

      var uluru = { lat: -3.71839, lng: -38.5434 };

      var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });

      var marker = new google.maps.Marker({ position: uluru, map: map });
    }