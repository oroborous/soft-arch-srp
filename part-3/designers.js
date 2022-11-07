/**
 * Uh oh. We've moved getFullName into the designer module
 * because it references HTML elements, but the function
 * also has a Product Manager concern: the source of the full
 * name.
 *
 * In Part 4, we'll refactor this into two functions, so
 * each can reside in the proper module.
 */

// View/design logic - Designers
// Where full name comes from (maybe database? cookie?) - Product Manager/Developers
function getFullName() {
    return $("input.name").val();
}

function setupClickHandlers() {
    $("body").on("click", "button.done", onDoneButtonClicked);
}

function displayWelcome(msg) {
    $("#welcome").text(msg);
}
