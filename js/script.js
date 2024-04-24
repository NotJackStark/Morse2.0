// Initialisera en dictionary för att översätta tecken till Morse-kod
let translator = {
    'a': '*−',
    'b': '−***',
    'c': '−*−*',
    'd': '−**',
    'e': '*',
    'f': '**-*',
    'g': '--*',
    'h': '****',
    'i': '**',
    'j': '*---',
    'k': '-*-',
    'l': '*-**',
    'm': '--',
    'n': '-*',
    'o': '---',
    'p': '*--*',
    'q': '--*-',
    'r': '*-*',
    's': '***',
    't': '-',
    'u': '**-',
    'v': '***-',
    'w': '*--',
    'x': '-**-',
    'y': '-*--',
    'z': '--**',
    'å': '- --- --- - ---',
    'ä': '- --- - ---',
    'ö': '--- --- --- -',
    '0': '-----',
    '1': '*----',
    '2': '**---',
    '3': '***--',
    '4': '****-',
    '5': '******',
    '6': '-****',
    '7': '--***',
    '8': '---**',
    '9': '----*',
    // Fortsätt så här för resten av alfabetet
};

// Funktion för att ta emot användarens input
/*function getUserInput() {
    let input = prompt("Vad vill du översätta till morse?");
    input = input.toLowerCase();
    alert("Din output är: " + translate(input));
}*/

// Funktion för att översätta text till Morse-kod
function translate(input) {
    let output = '';
    for (let character of input) {
        if (translator[character]) {
            output += translator[character] + " ";
        } else if (character === ' ') {
            output += "/ ";
        } else {
            output += character + " ";
        }
    }
    return output;
}

// Kör funktionen när sidan laddas
window.onload = getUserInput;
