const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let myStr = expr.substring(i, i + 10);
        let letter = '';

        if (myStr !== '**********') {

            console.log(myStr);
            for (let k = 0; k < myStr.length; k++) {
                if (myStr[k] !== '0') {
                    let mySymbol = myStr[k] + myStr[++k];
                    switch (mySymbol) {
                        case '10':
                            letter += '.';
                            break;
                        case '11':
                            letter += '-';
                            break;
                    }
                }
            }
            result += MORSE_TABLE[letter];
        } else {
            result += ' ';
        }

    }
    return result;
}

module.exports = {
    decode
}