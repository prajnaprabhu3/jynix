const { isLetter, isNumber, isSpace, isParenthesis, isQuote} =require('../helpers/identifyToken');

const tokenize = (input) => {
    const tokens=[];
    let pointer=0;

    while(pointer < input.length){
        pointer++;
    }

    return tokens;

}

module.exports={tokenize}