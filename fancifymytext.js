// Display an alert to test JavaScript is working
alert("Hello, world!");

// Function to increase text size
function makeTextBigger() {
    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function to apply styles based on selected radio button
function applyStyles() {
    let textArea = document.getElementById("textArea");
    let fancy = document.getElementById("fancy");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to transform text: uppercase and add "-Moo" to the last word of each sentence
function mooifyText() {
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();

    // Split the text into sentences by "."
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-MOO";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}
