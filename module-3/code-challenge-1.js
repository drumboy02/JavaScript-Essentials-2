/*
Scenario:
write a function that will draw m integers from 0 to n. pass parameters m and n and two flags to
the function:

    - the first determines whether the drawn numbers may be repeated

    - the second one states if the returned array of numbers should be sorted

use the Set class.

test your solution using the following code:

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
*/

function getRandomSet(m, n, repeat, sort) {
    // console.log(`m: ${m}\nn: ${n}\nrepeat: ${repeat}\nsort: ${sort}`);
    let integers = [];
    let set = !repeat && new Set();

    for (let i = 0; i < m; i++) {
        let random = Math.floor((Math.random() * (n + 1)));
        if (repeat) {
            integers.push(random);
        } else {
            if (!set.has(random)) {
                set.add(random);
            } else {
                i -= 1;
            }
        }
    }

    if (!repeat) integers = [...set];
    if (sort) integers.sort((a, b) => a - b);
    
    return integers;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));