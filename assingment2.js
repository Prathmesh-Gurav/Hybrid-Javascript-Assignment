const arg=process.argv
let grade=arg[2]
function marks(grade){
if(grade>75 ){
    console.log(`With ${grade} you get A grades`)
}else if(grade<75 && grade >50){
    console.log(`With ${grade} you get B grades`)
}else if(grade<50 && grade >25){
    console.log(`With ${grade} you get C grades`)
}else{
    console.log(`With ${grade} you get D grades`)
}
}
try{
    marks(grade)
}catch(error){
    console.error("Enter Valid Number")
}
