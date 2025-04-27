const inp=process.argv
for(let i=0;i<inp.lenth;i++){
}
const updated=inp.splice(2).map((n)=>parseInt(n))
const maximun=Math.max(...updated)
const minimun= Math.min(...updated)

const avg1=updated.reduce((a,i)=>a+i,0)
const average=avg1/updated.length;

 console.log(updated);
 console.log(`Min ${parseInt(minimun)}`)
 console.log(`Max ${parseInt(maximun)}`)
console.log(`Avg ${avg1}`);

console.log(average);



