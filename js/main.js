/* global $*/

$(window).load(function ()
               {   
    $("body").css("overflow","auto");
    $(".overlay .sk-circle").fadeOut(2000,
    function() 
    {
        $(this).parent.fadeOut(2000,
        function() 
        {
            $(this).remove();
        });
    });
});