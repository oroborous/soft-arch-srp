// This function was formerly named getFullName.
// It was renamed to reflect that it is only
// concerned with the HTML, not with the logic of
// where the full name comes from (which could change!)
function getNameInputValue() { // getFullName() {
    return $("input.name").val();
}

function setupClickHandlers() {
    $("body").on("click", "button.done", onDoneButtonClicked);
}

function displayWelcome(msg) {
    $("#welcome").text(msg);
}
