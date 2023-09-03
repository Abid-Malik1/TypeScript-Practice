//integrating over keys and values in a Map

let nameAge = new Map<string,number>();

nameAge.set("Abid",23);
nameAge.set("Ali",20);
nameAge.set("Asad",28);

for(let key of nameAge.keys()){
    console.log(key);
}

for(let value of nameAge.values()){
    console.log(value);
}

for(let entry of nameAge.entries()){
    console.log(entry[0],entry[1])
}

for(let [key,value] of nameAge){
    console.log(key,value);
}