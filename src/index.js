module.exports = function check(str, bracketsConfig) {

    if(odd(str) || isOpenBracketEnd(str) || isCloseBracketBegin(str)) return false;

    let openBrackets = [];
    let brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
        '|' : '|',
        '1' : '2',
        '3' : '4',
        '5' : '6',
        '7' : '7',
        '8' : '8'
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{'|| str[i] === '1' || str[i] === '3' || str[i] === '5')    // Если открывающая
            openBrackets.push(str[i]);
        else {                          // Если не открывающая
            if (str[i] === '|' || str[i] === '7' || str[i] === '8') {
                if (openBrackets.length == 0)
                    openBrackets.push(str[i]);
                else {
                    let last = openBrackets.pop();
                    if (last !== str[i]) {
                        openBrackets.push(last);
                        openBrackets.push(str[i]);
                    }
                }
            }
            else
                if (str[i] !== brackets[openBrackets.pop()]) return false;              // Если не равна закрывающей
        }
    }
    if (openBrackets.length > 0)  return false;
    return true;
}

function odd(str) {
    return str.length % 2 !== 0 ? true : false;
}

function isOpenBracketEnd(str) {
    return str[str.length - 1] === '(' || str[str.length - 1] === '{' || str[str.length - 1] === '[';
}

function isCloseBracketBegin(str) {
    return str[0] === ')' || str[0] === '}' || str[0] === ']';
}
