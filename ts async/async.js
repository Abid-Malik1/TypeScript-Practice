console.log("before async code");
function codeBr() {
    console.log("after 10sec run");
}
setTimeout(codeBr, 1000);
setInterval(codeBr, 3000);
console.log("after async code");
