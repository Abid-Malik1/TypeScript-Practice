type carsType={company:string,yearNumber:number}

let cars:carsType[] =[{
    company:"Suzuki",
    yearNumber:2000,

},{
    company:"Kia",
    yearNumber:2001,
},
{
    company:"Honda",
    yearNumber:2002,
},{
    company:"BMW",
    yearNumber:2003,
},{
    company:"Ford",
    yearNumber:2004,
},{
    company:"Toyota",
    yearNumber:2005,
},{
    company:"Fiat",
    yearNumber:2006,
},{
    company:"Jeep",
    yearNumber:2007,
},{
    company:"Audi",
    yearNumber:2008,
},{
    company:"Ferrari",
    yearNumber:20009,
},{
    company:"Tesla",
    yearNumber:2010,
},]

for (let result = 0; result < cars.length; result++){
  console.log(cars[result].company,cars[result].yearNumber);
}