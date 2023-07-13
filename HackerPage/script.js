

let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server...",
    "Connection failed. Retrying...",
    "Connecting to server 2...",
    "Connecting Successfully...",
    "Username...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match Found...",
    "Accessing Account...",
    "Hacked Successfully"
]

const sleep = (seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true)},seconds * 1000)
    })
}

const showHack= async (message)=>{
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () =>{
     for(let i =0; i<a.length;i++){
        await showHack(a[i])
     }

})()