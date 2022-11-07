// The product owner decides where the full name should
// come from. It's currently using the getNameInputValue
// function in the Designers module, but it could change
// if the product manager decides to pull the name from
// a database or a cookie, etc.
function getFullName() {
    return getNameInputValue(); //$("input.name").val();
}

// New function!
// Relies on the logic in getFullName and parseFirstName
function getFirstName() {
    return parseFirstName(getFullName());
}

// This function was in the Copywriters module in Part 3,
// but our refactoring has removed any code that was
// concerned with HOW to construct the welcome message.
// Now it's solely focused on functionality: when the
// button is clicked, display a message. What the message
// is or where it is displayed are now the concerns of
// the Copywriter and Designer modules, respectively.
function onDoneButtonClicked() {
    displayWelcome(welcomeMessage());
}
