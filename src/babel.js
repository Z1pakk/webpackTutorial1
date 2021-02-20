async function start() {
    return await Promise.resolve('async is working')
}

start().then(r => {
    console.log(r)
})

const unused = 42

class Util {
    static id = Date.now()
}

console.log(Util.id)
