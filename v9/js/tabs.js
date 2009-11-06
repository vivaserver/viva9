// thanks to http://craftyman.net/tabs-css-simples-con-jquery/
$(document).ready(function() {
  // hide all related tags' list but #1
  $(".related").hide();
  $(".related:first").show();
  // by default, the first tag in the list is the current
  $("ul.tags li:first a").addClass("current");
  // switch to the clicked tags' list
  $("ul.tags li a").click(function() {
    $("ul.tags li a").removeClass("current");
    $(this).addClass("current").blur();
    $(".related").hide();
    var currentTag = $(this).attr("href");
    $(currentTag).show();
    return false;
  });
});
