const LETTER=/[a-zA-Z]/;
const NUMBER=/^[0-9]+$/;
const WHITESPACE=/\s+/;
const OPERATOR=['+','-','*','/','%'];

const isLetter = char => LETTER.test(char);

const isNumber = char => NUMBER.test(char);

const isWhitespace = char => WHITESPACE.test(char);

const isOperator = char => OPERATOR.test(char);

const isQuote = char => char === ' " ';

const isOpeningParenthesis = char => char === '(';

const isClosingParenthesis = char => char === ')';

const isParenthesis = (char)=>{
    return isOpeningParenthesis(char) || isClosingParenthesis(char);
}


module.exports={isLetter,isNumber,isWhitespace,isOperator,isQuote,isParenthesis,isOpeningParenthesis,isClosingParenthesis};