// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// Set thirdWord to 1 to be used as a word counter
let thirdWord = 1
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        // Checks if the word counter thirdWord is evenly divisible by 3. If it is, the next word in the array is added to buildMeUp and an exclamation point is added to the end.
        if (thirdWord % 3 === 0) {
            buildMeUp += `${sentence[i]}! `

            // If it isn't divisible by 3, the next word in the array is added to buildMeUp.
        } else {
            // Concatenate the new word onto buildMeUp
            // Added a space at the end of the string to space out the words
            buildMeUp += `${sentence[i]} `
        }
        // Print buildMeUp to the console
        console.log(`${buildMeUp}`)
        thirdWord++
        // console.log(thirdWord)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)