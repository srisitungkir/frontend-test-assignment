// Buat fungsi yang menerima input string,
// outputnya adalah string yang huruf pertama di setiap 
// katanya merupakan huruf kapital

// ex:  input   -> priambudi lintang bagaskara
//      output  -> Priambudi Lintang Bagaskara

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
export function formatSentence(sentence) {
    return sentence
        .split(' ')
        .map(capitalizeFirstLetter)
        .join(' ');
}

// const text = 'priambudi lintang bagaskara';
// console.log(formatSentence(text));
