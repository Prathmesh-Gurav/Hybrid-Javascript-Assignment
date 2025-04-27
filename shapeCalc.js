const input=process.argv
//(rectangle, circle, triangle
if(input[2]=="rectangle"){
    let area=input[3]*input[4]
    console.log(area)
}else if(input[2]=="circle"){
    let area=input[3]*3.14
    console.log(area)
}else if(input[2]=="triangle"){
    let area=input[3]*(1/2)*input[4]
}