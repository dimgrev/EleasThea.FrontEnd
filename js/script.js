$( document ).ready(function() {

    //Things to do when website fully loaded..
    
    //A message for our little friends...
    console.log( "Hello little one! Tony Stark dies" );
    
    //Check scroll status and show correct navbar
    checkAndPrintCorrectNavBar();        

    //Set today's date in #reservation-date-picker...
    var d = new Date();
    var curr_date = String(d.getDate());
    var curr_month = String(d.getMonth() + 1);
    var curr_year = String(d.getFullYear());
    if (curr_month.length < 2){
        curr_month = '0' + curr_month;
    } 
    if (curr_date.length < 2){
        curr_month = '0' + curr_date;
    }
    $("#reservation-date-picker").val(curr_year + '-' + curr_month + '-' + curr_date);

    //Call the OWL
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            center:true
        });
    });


    //Humburger
    $(".navbar").on('show.bs.collapse hide.bs.collapse', function(){
        $("#toggleHumburgerBtn").toggleClass("is-active");
    });


    //when scrolling change navbar
    $(window).scroll(function() {
        checkAndPrintCorrectNavBar();
    });

    //functions...
    function checkAndPrintCorrectNavBar(){
        var $height = $(window).scrollTop();
        if($height > 0) {
            $('.scroll-variable-navbar').removeClass('scroll-variable-navbar-hidden');
        }
        else {
            $('.scroll-variable-navbar').addClass('scroll-variable-navbar-hidden');
        }
    }

    // MapBox
    mapboxgl.accessToken = 'pk.eyJ1Ijoia29ua3JpIiwiYSI6ImNqdnY2eWd1NjNzZHA0OXBic2Q2aXhoMDgifQ.zF2_d5xcqvmLJ190Qg6_8w';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center:[23.930797,35.545295],
    zoom: 9.6,
    attributionControl: false
    });

    // disable map zoom when using scroll
    map.scrollZoom.disable();

    // map.scrollZoom.enable().onclick; and disable on mouse out
    document.getElementById("map").onclick = function zme() {
        map.scrollZoom.enable();
    }
    document.getElementById("map").onmouseout = function zmd() {
        map.scrollZoom.disable();;
    }
    

    // Add zoom and rotation controls to the map.
    // map.addControl(new mapboxgl.NavigationControl());
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    var size = 100;

    var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
         
        onAdd: function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },
         
        render: function() {
            var duration = 1000;
            var t = (performance.now() % duration) / duration;
            
            var radius = size / 2 * 0.3;
            var outerRadius = size / 2 * 0.7 * t + radius;
            var context = this.context;
            
            // draw outer circle
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(105, 170, 6,' + (1 - t) + ')';
            context.fill();
            
            // draw inner circle
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(44, 100, 1, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();
            
            // update this image's data with data from the canvas
            this.data = context.getImageData(0, 0, this.width, this.height).data;
            
            // keep the map repainting
            map.triggerRepaint();
            
            // return `true` to let the map know that the image was updated
            return true;
        }
    };
         
    map.on('load', function () {
        
        map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
        
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [23.7826728,35.467349]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "pulsing-dot"
            }
        });
    });
    
});