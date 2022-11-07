// The parameter for this function was removed.
// The usage of the first name in the welcome message
// is a copywriter's decision, so having this function
// go fetch it is acceptable. No reason to pass it in
// from elsewhere.
function welcomeMessage() {
    let name = getFirstName();
    return "Welcome, " + name + "!";
}
