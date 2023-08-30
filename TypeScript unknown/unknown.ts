let data:unknown;

data = 20;
data = "unknown type";
data = true;
data = 2.3;

let item:string;
item = "Hello item"
if(typeof data === "string"){

    item=data;
}


console.log("Data variable result",data);
console.log("Item variable result",item);

