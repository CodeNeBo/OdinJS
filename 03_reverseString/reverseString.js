const reverseString = function(text) {
    let splitText = text.split("");
    let revText = splitText.reverse(); 
    let newText = revText.join("");

    return newText; 
};

// Do not edit below this line
module.exports = reverseString;
