//(1 meter ≈ 3.28084 feet)
function inchesToFeet(met){
    const feet=met*3.28084
    const a=Math.floor(feet)
    const inch=(feet-a)*12

    console.log(`${feet} feets and ${inch} inches`)

}
const arg=process.argv
let a=arg[2]
inchesToFeet(a)