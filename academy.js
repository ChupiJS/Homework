function countNumbersAndStrings(arr) {
    let numbers = 0;
    let strings = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numbers++;
        } else if (typeof arr[i] === 'string') {
            strings++;
        }
    }
    return `Numbers: ${numbers}, Strings: ${strings}`;
}

console.log(countNumbersAndStrings([1, '10', 'hi', 2, 3]));



function filterGreaterThan(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result.length > 0 ? result : "Such values do not exist.";
}

console.log(filterGreaterThan([10, 25, 16, -5, 30, 15, 24], 16));



function findViolationIndex(arr) {
    let index = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(findViolationIndex([-9, -4, -4, 3, 12, 4, 5]));



function invertObject(obj) {
    let inverted = {};
    for (let key in obj) {
        let value = obj[key];
        if (inverted[value]) {
            if (Array.isArray(inverted[value])) {
                inverted[value].push(key);
            } else {
                inverted[value] = [inverted[value], key];
            }
        } else {
            inverted[value] = key;
        }
    }
    return inverted;
}

console.log(invertObject({ a: '1', b: '2', c: '2' }));
