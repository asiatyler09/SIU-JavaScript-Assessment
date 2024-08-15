// declare and define function here
function replaceSpaces(str, replacementChar){
    return str.split('').join(replacementChar);
}

// test cases
//replaceSpaces('Today is a good day', '-'); // -> 'Today-is-a-good-day'
//replaceSpaces('Tomorrow will be a great day', '_'); // -> 'Tomorrow_will_be_a_Great_Day'
