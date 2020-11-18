const toys = ['toy1', 'toy2', 'toy8', 'toy7', 'toy6', 'toy5', 'toy3', 'toy4']
const sentences = ['', 'ive got toy1', 'i dont have toy1', 'dmas dsd dsdsds ewew', 'toy7 is awsome yayyy', 'kdsadjsakdj dsads dsds dsdsdds ds', 'toy5 is mine so leave it please',
    'have you seen toy3 its mine', 'i dont like his toys its called toy4']
const result = new Map(toys.map(i => [i, 0]));
const top = 3
const otherTop = 10
let splittedSentences = [[]]
sentences.forEach(sentence => {
    if (sentence && sentence !== '') {
        let splittedSentenc = sentence.split(' ')
        splittedSentences.push(splittedSentenc)
    }
}
)

toys.forEach(toy => {
    splittedSentences.forEach(sentences => {
        if (sentences.includes(toy)) {
            result.set(toy, result.get(toy) + 1)
        }
    })

})

const sortedResult = new Map(
    Array
        .from(result)
        .sort((a, b) => {
            // a[0], b[0] is the key of the map

            return b[1] - a[1];
        })
)


const featureValues = Array.from(sortedResult.keys())



const test = featureValues.slice(1, featureValues.length)

console.log(test)

