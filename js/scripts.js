$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var usernameInput = $("input#username").val();
    $(".username").text(usernameInput);
    $("#letter").show();
    event.preventDefault();
  });
});
