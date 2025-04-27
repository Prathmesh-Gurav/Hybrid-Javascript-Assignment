const arg=process.argv

const list=["dinner","coding","fun","sleep"]
if (arg[2]=="add"){
    list.push(arg[3])
    for(let t of list){
        console.log(`  ${t}`)
    }
}else if(arg[2]=="remove"){
    list.pop()
    for(let t of list){
        console.log(` ${t}`)
    }
}