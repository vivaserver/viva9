$(document).ready(function() {
  $('.bin').click(function() {
    var comment = $(this).attr("href");
    $(comment).hide("slow");
  });
});
