$( document ).ready(function() {

    //Things to do when website fully loaded..    
    //A message for our little friends...
    console.log( "Hello little one! Tony Stark dies" );

    //display if needed the cookie bar...  
    if (localStorage.getItem('eleas-thea-hasDismissedCookieBar') != 'true') {
        //display cookie bar
        $(".cookie-bar").css("visibility","visible");
    }

    //add hasRevisited website...
    $(".close-cookie-bar-btn").click(function(){
        localStorage.setItem('eleas-thea-hasDismissedCookieBar', 'true');
        
        $(".cookie-bar").animate({
            bottom:"-200px",
        }, "slow");     
        
        $(".cookie-bar").animate({
            visibility:"hidden",
        }, "slow"); 
    });

    
            

    //Set today's date in #reservation-date-picker...
    var d = new Date();
    var curr_date = String(d.getDate());
    var curr_month = String(d.getMonth() + 1);
    var curr_year = String(d.getFullYear());
    if (curr_month.length < 2){
        curr_month = '0' + curr_month;
    } 
    if (curr_date.length < 2){
        curr_date = '0' + curr_date;
    }
    $("#reservation-date-picker").val(curr_year + '-' + curr_month + '-' + curr_date);
    $("#reservationForCookingClass-date-picker").val(curr_year + '-' + curr_month + '-' + curr_date);

    $("#reservation-date-picker").attr({
        "min": curr_year + '-' + curr_month + '-' + curr_date
    });

    $("#reservationForCookingClass-date-picker").attr({
        "min": curr_year + '-' + curr_month + '-' + curr_date
    });

    //Call the OWL
    $(".owl-carousel").owlCarousel({
        items:1,
        center:true,
        dots:true,            
        nav    : true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    });

    $('.imageGallery').slick({
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
    
    //Fb Filler

    //call the trip advisor owl eyes...
    setInterval(function(){
        setTimeout(function(){
            $('.tripdiv2').show();
        },300);
        setTimeout(function(){
            $('.tripdiv2').hide();
        },1500);
    },3000);

    setInterval(function(){
        setTimeout(function(){
            $('.tripdiv3').show();
        },600);
        setTimeout(function(){
            $('.tripdiv3').hide();
        },1500);
    },3000);


    //Gallery open/close btns
    var opengallery= false;

    $(".closeGalleryBtn").on("touchstart click", function(){
        closeGallery();
    });
    
    function closeGallery(){
        AddTemporarySmoothness(".gallerySlide");
        $('.gallerySlide').removeClass('gallerySlideVisible');
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        window.location.hash="#";
        opengallery = false;
    }
    var ul = window.location.href;

    $(".showGalleryBtn").on("click", function(){
        $(".gallerySlide").animate({
            left:"0px",
        }, "slow");    
        
       
        $(document).on('keydown', function(event){
            if (event.key == "ArrowRight" && opengallery == true){
                $(".slick-next").click();
            }
            else if (event.key == "ArrowLeft" && opengallery == true){
                $(".slick-prev").click();
            }
        });
        window.location.hash="gallery";
        opengallery = true;
    });
    
    $(window).on('popstate', function(e){
        if(opengallery){            
                closeGallery();
        }
    });

    $(document).on('keydown', function(event) {
    if (event.key == "Escape" && opengallery == true) {
        AddTemporarySmoothness(".gallerySlide");
        $('.gallerySlide').removeClass('gallerySlideVisible');
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        
        opengallery = false;
        }
    });

    function AddTemporarySmoothness(cl){
        $(cl).addClass('animationSmoothness');
        $(cl).on("transitionend", function(){
            $(cl).removeClass('animationSmoothness');
        });
    }
    

    //Menu Slide
    
    var hasFadedOut=false;
    var menu=false;
    $(".menu-clickExplainer").on("click", function(){
        if (!menu) {
            // $('.menu-clickExplainer').fadeOut(500);
            if (!hasFadedOut) {
                $('.menuHalfOpen').fadeOut(100);
                $('.menuFilled').fadeOut(200);
                $('.menu-clickExplainer').html("Για να κλείσετε το μενού, κάντε κλικ εδώ");
                hasFadedOut=true;
            }
            else{
                $('.menuHalfOpen').fadeIn(100);
                $('.menuFilled').fadeIn(200);
                hasFadedOut=false;
            }
            $('.menuDetails').hide();
            $('.menuCatalog').show();
            menu=true;
        }
        else{
            // $('.menu-clickExplainer').fadeIn(1000);
            if (!hasFadedOut) {
                $('.menuFilled').show();
                $('.menuHalfOpen').show();
                hasFadedOut=true;
            }
            else{
                $('.menuFilled').show();
                $('.menuHalfOpen').show();
                $('.menu-clickExplainer').html("Για να δείτε το μενού, κάντε κλικ εδώ");
                hasFadedOut=false;
            }
            $('.menuDetails').show();
            $('.menuCatalog').hide();
            menu=false;
        }
    });
    $(".menu-clickExplainer").mouseenter(function(){
        if(!hasFadedOut){
            $('.menuFilled').hide();
        }
    });
    $(".menu-clickExplainer").mouseleave(function(){
        if(!hasFadedOut){
            $('.menuFilled').show();
        }
    });
    

    $('.nav-link').on('click', function(e){
        // $('.navbar-collapse').collapse("hide");
    });

    //display overlay when menu is expanded..
    $('.navbar').on('show.bs.collapse', function (e) {
        $('.blackOverlay').fadeIn(200);
        // alert();
    })

    $('.navbar').on('hide.bs.collapse', function (e) {
        $('.blackOverlay').fadeOut(200);
        // alert();
    })

    $('.blackOverlay').on("touchstart click", function(){
        // alert();
        $('.navbar-collapse').collapse("hide");
    })

    $('.mapProtectorFromLidl').on("click", function(){
        $(".mapProtectorFromLidl").fadeTo(200,0,function(){
            $(".mapProtectorFromLidl").css({zIndex: '0'});
        });
    })

    $(document).on('scroll', function(){
        if($(".mapProtectorFromLidl").css("z-index")!='1000'){
            $(".mapProtectorFromLidl").css({zIndex: '1000'});
            $(".mapProtectorFromLidl").fadeTo(200,1);            
        }
    })

    $(".dismissMessageBtn").on("click", function(e){
        $(".msgBgOverlay").fadeTo(200,0, function(){
            $(".msgBgOverlay").css({visibility:'hidden'});
            $(".successfulMessage").css({display:'none'}); //hide all possible outcomes...
            $(".errorMessage").css({display:'none'});
            $(".dismissMessageBtn").css({display:'none'});
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
            $("form")[0].reset();
            $("form")[1].reset();
            $("form")[2].reset();
            $("#reservation-date-picker").val(curr_year + '-' + curr_month + '-' + curr_date);
            $("#reservationForCookingClass-date-picker").val(curr_year + '-' + curr_month + '-' + curr_date);
            
        });
    })

    $(".cookingClasses-learnMoreBtn").on("click", function(e){
        $(".cookingClassesSlide").animate({
            left:"0%",
        }, "slow");
    });

    $(".closeCookingClassesSlide-btn").on("click", function(e){
        $(".cookingClassesSlide").animate({
            left:"100%",
        }, "slow");
    })

    // MapBox
    mapboxgl.accessToken = 'pk.eyJ1Ijoia29ua3JpIiwiYSI6ImNqdnY2eWd1NjNzZHA0OXBic2Q2aXhoMDgifQ.zF2_d5xcqvmLJ190Qg6_8w';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
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
        map.scrollZoom.disable();
    }
    //Custom Map Button Get directions
    class MyCustomControl {
        onAdd(map) {
            this._map = map;
        
            this._btn = document.createElement("button");
            this._btn.className = "getDirections";
            this._btn.textContent = "View in Google Maps";
            this._btn.type = "button";
            this._btn["aria-label"] = "View in Google Maps";
            this._btn.onclick = function() {
                var win = window.open("https://goo.gl/maps/kFPBsLKj4gmZAwH99", '_blank');
                win.focus();
            };


        
            this._container = document.createElement("div");
            this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
            this._container.appendChild(this._btn); 
        
            return this._container;
          }
        
          onRemove() {
            this._container.parentNode.removeChild(this._container);
            this._map = undefined;
          }
        }
      

      const myCustomControl = new MyCustomControl();
      
      map.addControl(myCustomControl, 'top-right');


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