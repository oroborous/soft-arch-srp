/**
 * Uh oh. We refactored onDoneButtonClick into the Copywriters
 * module because it deals with displaying the welcome message.
 * But it also has a Product Manager concern: the behavior of
 * the Done button when it's clicked.
 *
 * In Part 4, we'll decompose this into multiple functions
 * that can live in separate modules.
 */

// Behavior/workflow of Done button - Product Manager
// Copy change to welcome message - Copywriters
function onDoneButtonClicked() {
    let name = getFullName();
    let firstName = parseFirstName(name);
    displayWelcome(welcomeMessage(firstName));
}

function welcomeMessage(name) {
    return "Welcome, " + name + "!";
}
