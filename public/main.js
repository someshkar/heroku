$(function(){
    $("#facebook").mouseover(function(){
        $("#twitter").animate({opacity: '0.5'}, 150);
        $("#github").animate({opacity: '0.5'}, 150);
        $("#email").animate({opacity: '0.5'}, 150);
    });
    $("#facebook").mouseleave(function(){
        $("#twitter").animate({opacity: '1'}, 150);
        $("#github").animate({opacity: '1'}, 150);
        $("#email").animate({opacity: '1'}, 150);
    });
    $("#twitter").mouseover(function(){
        $("#facebook").animate({opacity: '0.5'}, 150);
        $("#github").animate({opacity: '0.5'}, 150);
        $("#email").animate({opacity: '0.5'}, 150);
    });
    $("#twitter").mouseleave(function(){
        $("#facebook").animate({opacity: '1'}, 150);
        $("#github").animate({opacity: '1'}, 150);
        $("#email").animate({opacity: '1'}, 150);
    });
    $("#github").mouseover(function(){
        $("#facebook").animate({opacity: '0.5'}, 150);
        $("#twitter").animate({opacity: '0.5'}, 150);
        $("#email").animate({opacity: '0.5'}, 150);
    });
    $("#github").mouseleave(function(){
        $("#facebook").animate({opacity: '1'}, 150);
        $("#twitter").animate({opacity: '1'}, 150);
        $("#email").animate({opacity: '1'}, 150);
    });
    $("#email").mouseover(function(){
        $("#facebook").animate({opacity: '0.5'}, 150);
        $("#twitter").animate({opacity: '0.5'}, 150);
        $("#github").animate({opacity: '0.5'}, 150);
    });
    $("#email").mouseleave(function(){
        $("#facebook").animate({opacity: '1'}, 150);
        $("#twitter").animate({opacity: '1'}, 150);
        $("#github").animate({opacity: '1'}, 150);
    });
    /*swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            });
        } else {
                swal("Your imaginary file is safe!");
        }
    });*/
});
