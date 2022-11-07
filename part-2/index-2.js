// Assumes HTML on page:
// <input class="name">
// <button class="done">Done</button>
// <h1 id="welcome"></h1>
//

/**
 Now that the code is decomposed into separate functions,
 we can think about who within the organization would
 request a change to each function.

 Developers:
 - logic to load JavaScript when page is ready
 Designers:
 - what HTML elements are used, their classes, and ids
 Product Manager:
 - behavior of the Done button
 - source of the full name used in the greeting
 Copywriter:
 - the text of the welcome message that appears on screen
 Testers/QA:
 - bugs in logic for parsing a first name from a full name

 To be compliant with Single Responsibility Principle,
 the code that would be changed by each agent should be
 in its own module. In part 3, we'll move these functions
 into separate JS files accordingly.
 */

// Loading code - Developers
$(setupClickHandlers);

// View/design logic - Designers
function setupClickHandlers() {
    $("body").on("click", "button.done", onDoneButtonClicked);
}

// Behavior/workflow of Done button - Product Manager
// Copy change to welcome message - Copywriters
function onDoneButtonClicked() {
    let name = getFullName();
    let firstName = parseFirstName(name);
    displayWelcome(welcomeMessage(firstName));
}

// View/design logic - Designers
// Where full name comes from (maybe database? cookie?) - Product Manager/Developers
function getFullName() {
    return $("input.name").val();
}

// Copy change to welcome message (i18n?) - Copywriters
function welcomeMessage(name) {
    return "Welcome, " + name + "!";
}

// View/design logic - designer
function displayWelcome(msg) {
    $("#welcome").text(msg);
}

// Logic to parse the first name from a full name - Testers/QA (bugs)
function parseFirstName(fullName) {
    let nameParts = fullName.split(" ");
    let firstPart = nameParts[0];
    if (firstPart === "Mr." || firstPart === "Ms." || firstPart === "Dr.") {
        // Get rid of the silly .shift and just return the second value
        return nameParts[1];
    } else {
        return firstPart;
    }
}

