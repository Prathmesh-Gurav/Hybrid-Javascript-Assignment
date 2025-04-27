const arg=process.argv
for(let i=0;i<arg.length;i++){

}
const list=[]
const updated=arg.splice(2).map((n)=>parseInt(n))
const updated2=arg.splice(2).map((n)=>parseInt(n))
for (let i=0;i<arg.length;i++){
    list.push(updated[i])
}


const sorted=updated.sort((a,b)=>(a-b))

const revsort=updated.sort((a,b)=>b-a)

const even=updated.filter((n)=>n%2==0);

console.log(`even array : ${even}`)
console.log(`sorted array : ${sorted}`)
console.log(`revsorted array  : ${revsort}`)
