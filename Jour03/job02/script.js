$("#resultat").text("Vous avez cliqué sur le bouton !").css("color", "red").hide();
// $("#resultat").hide();


// fonctionnality to show the result when the button is clicked
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
  

// fonctionnality to shuffle the images in the second container
  $("#shuffleBtn").click(function() {
    $("#secondContainer").shuffleChildren();
  });


// fonctionnality to move an image from one container to another
  $("#secondContainer").on("click", "img", function() {
    var image = $(this).detach();
    $("#container").append(image);
    if ($("#container img").length === 6) {
        checkOrder();
    }
});


function checkOrder() {
    let images = $("#container");
    // let image = images.children().attr("src");
    let isOrdered = true;
    images.children().each(function(index, img) {
        if ($(img).attr("src") !== "images/arc" + (index + 1) + ".png") {
            isOrdered = false;
        }
    });

    if (isOrdered) {
        $("#resultat").text("Vous avez gagné !").css("color", "green").show();
    } else {
        $("#resultat").text("Vous avez perdu !").css("color", "red").show();
    }
}
