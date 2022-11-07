// "describe" creates a test suite, a group of test
// cases for a specific functionality: pressing the
// "done" button, in this case. The first argument
// is the name of the test suite.
describe("pressing the done button", function() {
    let nameField, doneButton, welcome;

    beforeAll(function() {
        nameField = $("<input class='name'>").appendTo("body");
        doneButton = $("<button class='done'>Done</button>").appendTo("body");
        welcome = $("<h1 id='welcome'></h1>").appendTo("body");
    });

    // "it" creates a spec, a test case. The first
    // argument is the name of the spec.
    it("displays welcome to a doctor using first name from input", function() {
        nameField.val("Dr. Stacy Read");
        doneButton.click();
        expect(welcome.text()).toEqual("Welcome, Stacy!");
    });

    it("displays welcome to a woman using first name from input", function() {
        nameField.val("Ms. Stacy Read");
        doneButton.click();
        expect(welcome.text()).toEqual("Welcome, Stacy!");
    });
});
