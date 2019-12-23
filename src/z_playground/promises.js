const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve('This is my resolved data')
        reject('something goes wrong')
    }, 1500)
})

promise.then((data) => {
    console.log('1', data)
}).catch((error)=>{
    console.error('Error:', error)
})

console.log('after')