// const addExcitement = function (message) {
//     console.log(`The message you have for the console is: "${message}". Is this correct?`)
//     return(addExcitement)
// }

// addExcitement("I've created a working function")

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, punctuation, quantity) {

    let buildMeUp = ""

    for (let i = 0; i < sentence.length; i++) {
        const wordBuilder = sentence[i]

        if ((i + 1) % 3 === 0) {
            buildMeUp += `${wordBuilder}${punctuation.repeat(quantity)} `
        } else {
            buildMeUp += `${wordBuilder} `
        }
        console.log(buildMeUp)
    }
}

addExcitement(sentence, "*", 4)