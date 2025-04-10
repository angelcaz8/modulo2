function findLongestWord(text) {
    const words = text.split(' '); 
    let longestWord = ''; 

    
    for (const word of words) {
        
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord; 
}


const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); 