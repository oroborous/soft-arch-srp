function parseFirstName(fullName) {
    let nameParts = fullName.split(" ");
    let firstPart = nameParts[0];
    if (firstPart === "Mr." || firstPart === "Ms." || firstPart === "Dr.") {
        return nameParts[1];
    } else {
        return firstPart;
    }
}
