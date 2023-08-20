const reverseString = function(text) {
    let textArray = text.split ("");
    let reverseArray = textArray.reverse ();
    let reverseText = reverseArray.join ('');
    return reverseText
};

// Do not edit below this line
module.exports = reverseString;
