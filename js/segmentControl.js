
$(document).ready(function(){
    $(".monthly input[type=radio]").on("change", function(){
        if($(this).is(":checked")){
            $(".price").text("$15");
            $(".billed").text("monthly");
            $(".annually").removeClass("checked");
            $(this).parent().addClass("checked");
        }
    });

    $(".annually input[type=radio]").on("change", function(){
        if($(this).is(":checked")){
            $(".price").text("$12");
            $(".billed").text("annually");
            $(".monthly").removeClass("checked");
            $(this).parent().addClass("checked");
        }
    });
});



