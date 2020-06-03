$(document).ready(function(){
    $(".showGalleryBtn").on("click", function(){

        //load images upon request...
        $(".imgFromGal").each(function(index){
            var lazySrcVal = $(this).attr("lazy-src");
            $(this).attr("src", lazySrcVal);
        });

    });
});