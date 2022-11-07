// Assumes HTML on page:
// <input class="name">
// <button class="done">Done</button>
// <h1 id="welcome"></h1>
//

/**
 In step one, we add comments to our code to help identify
 the different concerns. We have a lot!
 -- loading logic
 -- event handling
 -- user input
 -- text parsing
 -- message creation
 -- message display

 In step two, we'll break these concerns into separate
 functions. This will help us identify the change agent
 for each concern.
 */

// DOM ready - control flow, loading logic
$(function() {
    // click handler
    $("body").on("click", "button.done", function() {
        // user input, how to fetch user's name
        let name = $("input.name").val();
        // parse first name from full name
        name = name.split(" ");
        if (name[0] === "Mr." || name[0] === "Ms." || name[0] === "Dr.") {
            name.shift();
        }
        // compose welcome message with first name, display to user
        $("#welcome").text("Welcome, " + name[0] + "!");
    });
});
