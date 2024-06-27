// 2000. Reverse Prefix of Word



// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.






/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

    if(word.includes(ch)){
        
        let string = ""

        for(let i = 0; i < word.length; i++){

            if(word[i] == ch){
                string += "" + word[i] + ""
                break;
            }
            else{
                string += "" + word[i] + ""
            }
        }

        let rev = string.split('').reverse().join('')

        let complete = rev

        for(let i = string.length; i < word.length; i++){

            complete += "" + word[i] + ""
        }

        return complete
    }
    else{
        return word
    }
    
    
};