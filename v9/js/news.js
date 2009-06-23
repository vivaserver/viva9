$(document).ready(function() {
  $('.bin').click(function() {
    var comment = $(this).attr("href");
    $(comment).hide("slow");
  });
  // select news url on input field click (focus)
  $('#share_url').focus();
  $('#share_url').focus(function() {
    this.select();
  });
});
