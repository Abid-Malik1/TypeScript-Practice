class Parent{
    nam:any; 
    setName(nam:any)
    {
      this.nam = nam
    }
}

class Child extends Parent{
    getName():string
    {
        return this.nam
    }
}

let c1 = new Child();
c1.setName('this code is working baby');

console.log(c1.getName());