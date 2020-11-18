const foreground = [1, 2, 3, 4].sort()
const background = [5, 6, 7, 8].sort()

const total = 9
let result = []

foreground.forEach(fs => {
    background.forEach(bs => {
        if (total - fs >= bs) {
            result.push({ fs, bs })
        }
    })
})
console.log(result)
