$(document).ready(function () {
    $('.first-parallax-block').parallax({imageSrc: '../image/parallax1.jpg'});
    $('.second-parallax-block').parallax({imageSrc: '../image/parallax2.jpeg'});

    $('.first-parallax-block-fodies').parallax({imageSrc: '../image/parallax-foodies-1.jpeg'});


    $('.gallery-open').find('img').each(function(){
       $(this).click(function(e){
           e.preventDefault();

           $('#modal-image').attr('src', $(this).attr('src'));
           $('#gallery-modal').modal("show");
       });
    });
});

function initMap(){
    var map = new google.maps.Map(document.getElementById('map-business'), {
        zoom: 17
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: '../image/map-person.png'
            });

            map.setCenter(pos);

        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
}