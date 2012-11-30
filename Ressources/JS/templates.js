$(document).ready(function() {
    //---Define VARS---//
    var body = $("body");
    var left = $("#left");
    var right = $("#right");
    var backbtn = $("#goback");
    var store = $("#store");
    var social = $("#socialite");
    var tweet = $("#tweet");
    var rss = $("#rss");
    var li = $("li");
    var windowWidth = screen.width;
    var windowHeight = screen.height;
    //---END---//
    //---Initialize DIVS---//
    $("#sortable #blank").each(function() {
        var colors = ["#0080FF", "#008502", "#e19e19", "#00bbe1", "#54af0e", "#00aadb"];
        var rand = Math.floor(Math.random() * colors.length);
        $(this).css("background-color", colors[rand]);
    });
    //---END---//
    //---Go to Fullscreen---//

    function fScreen() {
        $(this).css({
            "position": "absolute",
            "top": 0,
            "left": 0,
            "width": windowWidth,
            "height": windowHeight,
            "z-index": 4
        });
        $(".start").hide();
    }
    //---END---//
    //---SlideScreen---//

    function slideScreen() {
        left.click(function() {
            $("#sortable").animate({
                "left": "+=" + screen.width + "px"
            }, "slow");
            left.hide();
            right.show();
        });
        right.click(function() {
            $("#sortable").animate({
                "left": "-=" + screen.width + "px"
            }, "slow");
            right.hide();
            left.show();
        });
    }
    //---END---//
    //---Set Sortable---//
    $("#column1, #column2").sortable({
        connectWith: ".connectedColumn"

    });

    //---END---//
    //---Apply Functions---//
    left.hide();
    $("#goback").hide();
    social.click(fScreen);
    store.click(fScreen);
    tweet.click(fScreen);
    rss.click(fScreen);
    slideScreen();
    body.css({
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": windowWidth,
        "height": windowHeight
    });
    $("#document ul").each(function() {
        this.css({
            "width": windowWidth - 400,
            "height": windowHeight - 200
        });
    });
$(function(){
  // Cycle a banner, replace "ID" with the name of the ID you want to cycle
  $("body #desktop").cycle();
});

});