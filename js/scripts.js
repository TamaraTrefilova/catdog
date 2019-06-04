
$(function() {
  $("button#meow").click(function() {
    $("ul#cat_says").prepend("<li>Meow! Hello!</li>");
    $("ul#cat_says").before("<p>hi there<p>");
    $("ul#dog_says").prepend("<li>Bark! Why hello there!</li>");
    $("ul#cat_says").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#dog_says").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#bark").click(function() {
    $("ul#cat_says").prepend("<li>Goodbye!I don't talk to you!</li>");
    $("ul#dog_says").after("<p>After the dog</p>");
    $("ul#dog_says").prepend("<li>Why???? Stay, dear cat!</li>");
    $("ul#cat_says").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#dog_says").children("li").first().click(function() {
      $(this).remove();
    });
  });


});
