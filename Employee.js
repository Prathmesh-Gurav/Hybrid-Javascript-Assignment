const input=process.argv
class Employee{
    constructor(name,id,dept){
        this.name=name
        this.id=id
        this.dept=dept
    }
}

let e1=new Employee(input[2],input[3],input[4])
console.log(e1)
