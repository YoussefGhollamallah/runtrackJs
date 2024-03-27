$("#resultat").text("Vous avez cliqué sur le bouton !").css("color", "red").hide();
// $("#resultat").hide();

$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
      var $el = $(el);
      var $find = $el.children();
  
      $find.sort(function() {
        return 0.5 - Math.random();
      });
  
      $el.empty();
      $find.appendTo($el);
    });
  };
  
  $("#shuffleBtn").click(function() {
    // Usage
    $("#secondContainer").shuffleChildren();
  });

  $("#secondContainer").on("click", "img", function() {
    var image = $(this).detach();
    $("#container").append(image);
});
