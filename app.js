// COMPLETE THE CODE

$(function() {
  // Exercise 1: Find all <li> elements within a <ul> and change their text color to blue
  $("#exercise1Button").on('click', function() {
    $("#exercise1 ul li").css("color", "blue");
  });

  // Exercise 2: Find the parent <div> of a paragraph and change its background color
  $("#exercise2Button").on('click', function() {
    $("#exercise2 p").parent("div").css("background-color", "lightgreen");
  });

  // Exercise 3: Find all ancestor <div> elements of a paragraph and change their background color
  $("#exercise3Button").on('click', function() {
    $("#exercise3 p").parents("div").css("background-color", "lightyellow");
  });

  // Exercise 4: From `this`, find and hide only the second <p> sibling of the <h3> element
  $("#exercise4Button").on('click', function() {
    $(this).siblings("p").eq(1).hide();
  });

  // Exercise 5: From `this`, find all <p> elements within the <div> and add a border to them
  $("#exercise5Button").on('click', function() {
    $(this).siblings("div").children("p").css("border", "2px solid red");
  });

  // Exercise 6: From `this`, find and change the color of <span>Item 5</span>
  $("#exercise6Button").on('click', function() {
    $(this).prevAll("div").eq(0).find("span").filter(function() {
      return $(this).text().trim() === "Item 5";
    }).css("color", "red");
  });
});
