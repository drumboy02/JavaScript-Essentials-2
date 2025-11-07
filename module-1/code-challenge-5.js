/*
Scenario:
write a function, deepComp, that will compare two objects given as arguments (deep comparison).
compare only properties (ignore methods), and consider the possibility of nesting (any number of
levels).

properties can also be objects and arrays. we are interested in the properties available during
the usual enumeration.

for testing, use the following piece of code:

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false
*/

function deepComp(obj1, obj2) {
    // console.log(`deepComp(${obj1}, ${obj2})`);
    if (obj1 === obj2) return true;

    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    let len = keys1.length;

    if (len !== keys2.length) return false;
    for (let i = 0; i < len; i++) {
        let key1 = keys1[i];
        let key2 = keys2[i];
        if (key1 !== key2) return false;

        let val1 = obj1[key1];
        let val2 = obj2[key2];

        if (typeof val1 === "object") {
            if (!deepComp(val1, val2)) return false;
        } else {
            if (val1 !== val2) return false;
        }
    }

    // Object.values() method
    // let props1 = Object.values(obj1);
    // let props2 = Object.values(obj2);
    // let len = props1.length;
    // if (len !== props2.length) return false;

    // for (let i = 0; i < len; i++) {
    //     let val1 = props1[i];
    //     let val2 = props2[i];

    //     if (typeof val1 === "object") {
    //         if (!deepComp(val1, val2)) return false;
    //     } else {
    //         if (val1 !== val2) return false;
    //     }
    // }

    return true;
}





// sample solution:
/*
let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;
    if(retVal) {
        for(property in src) {
            if(typeof(src[property]) === typeof(trg[property])) { 
                retVal = typeof(src[property]) === 'object' ? deepComp(src[property], trg[property]) : src[property] === trg[property]
            } else {
                retVal =false;
            }
            if(!retVal) break;
        }
    }
    return retVal;
}
*/
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log("result:", deepComp(a,b)); // -> true
console.log("result:", deepComp(a,c)); // -> false
console.log("result:", deepComp(a,d)); // -> false
console.log("result:", deepComp(a,e)); // -> false
console.log("result:", deepComp(a,f)); // -> false