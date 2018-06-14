
$(document).ready(function(){
    $(".monthly input[type=radio]").on("change", function(){
        if($(this).is(":checked")){
            $(".price").text("$15");
            $(".annually").removeClass("checked");
            $(this).parent().addClass("checked");
        }
    });

    $(".annually input[type=radio]").on("change", function(){
        if($(this).is(":checked")){
            $(".price").text("$12");
            $(".monthly").removeClass("checked");
            $(this).parent().addClass("checked");
        }
    });
});



