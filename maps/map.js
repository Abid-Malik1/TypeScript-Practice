//integrating over keys and values in a Map
var nameAge = new Map();
nameAge.set("Abid", 23);
nameAge.set("Ali", 20);
nameAge.set("Asad", 28);
for (var _i = 0, _a = nameAge.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
for (var _b = 0, _c = nameAge.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
for (var _d = 0, _e = nameAge.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
for (var _f = 0, nameAge_1 = nameAge; _f < nameAge_1.length; _f++) {
    var _g = nameAge_1[_f], key = _g[0], value = _g[1];
    console.log(key, value);
}
