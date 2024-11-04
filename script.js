document.addEventListener('DOMContentLoaded', function() {
    const viewLocation = document.querySelector('.view-location');
    const hideLocation = document.querySelector('.hide-location');
    const googleMap = document.querySelector('.google-map');

    viewLocation.addEventListener('click', function() {
        googleMap.classList.add('active');
    });

    hideLocation.addEventListener('click', function() {
        googleMap.classList.remove('active');
    });
});
