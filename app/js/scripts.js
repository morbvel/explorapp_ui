$(document).ready(function () {
    $('.first-parallax-block').parallax({imageSrc: '..'+$('.first-parallax-block').attr('data-image-src')});
    $('.second-parallax-block').parallax({imageSrc: '..'+$('.second-parallax-block').attr('data-image-src')});

    $('.first-parallax-block-fodies').parallax({imageSrc: '..'+$('.first-parallax-block-fodies').attr('data-image-src')});

    $('.parallax-block-1-business').parallax({imageSrc: '..'+$('.parallax-block-1-business').attr('data-image-src')});
    $('.parallax-block-2-business').parallax({imageSrc: '..'+$('.parallax-block-2-business').attr('data-image-src')});


    $('.gallery-open').find('img').each(function(){
       $(this).click(function(e){
           e.preventDefault();

           $('#modal-image').attr('src', $(this).attr('src'));
           $('#gallery-modal').modal("show");
       });
    });

    $('.producto').click(function(e){
        e.preventDefault();
        $('#product-image').attr('src', $(this).find('img').attr('src'));
        $('#product-name').text($(this).find('h3').text());
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