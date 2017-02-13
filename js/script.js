$(document).ready(function () {
    'use strict';
    var gColor = function () {
        // Generic color
        var red = Math.floor(Math.random() * (255 - 0)) + 0;
        var green = Math.floor(Math.random() * (255 - 0)) + 0;
        var blue = Math.floor(Math.random() * (255 - 0)) + 0;
        var rgb = "rgb(" + red + "," + green + "," + blue + ")";
        var styles = {
            backgroundColor: rgb,
            transition: "1s"
        };
        $("body").css(styles);
        $(".block-tweet").css("color", rgb);
    };
    
    var newQuote = function () {
        $("#new-quote").on("click", function () {
            gColor();
            $.ajax({
                url: "http://api.forismatic.com/api/1.0/?method=getQuote&key=609543&format=jsonp&lang=en&jsonp=getQuote",
                
                jsonpCallback: "getQuote",

                dataType: "jsonp",

                success: function( response ) {
                    $("#content").html(response.quoteText);
                    $("#name").html(response.quoteAuthor);
                    $("#tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quote&text=" + response.quoteText);
                }
            });
        });
    };
    newQuote();
    gColor();
    $("#new-quote").click();
});