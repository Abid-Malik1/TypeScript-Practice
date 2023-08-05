"use strict";
class Parent {
    setName(nam) {
        this.nam = nam;
    }
}
class Child extends Parent {
    getName() {
        return this.nam;
    }
}
let c1 = new Child();
c1.setName('this code is working baby');
console.log(c1.getName());
