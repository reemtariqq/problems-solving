var bIsValidString = false;
var oCharMapCount = input.trim().split("").reduce((acc, val) => {
    if (acc[val]) {
        acc[val] += 1;
    }
    else {
        acc[val] = 1;
    }
    return acc;
}, {});
var oCharOccuranceMap = {};
for (let key in oCharMapCount) {
    if (oCharOccuranceMap[oCharMapCount[key]]) {
        oCharOccuranceMap[oCharMapCount[key]] += 1;
    }
    else {
        oCharOccuranceMap[oCharMapCount[key]] = 1;
    }
}
var iCharOccurances = (Object.keys(oCharOccuranceMap) || []).length;

if (iCharOccurances === 1) {
    bIsValidString = true;
}
else if (iCharOccurances === 2) {
    for (let iCharCountOccurance in oCharOccuranceMap) {
        if (oCharOccuranceMap[iCharCountOccurance] === 1) {
            bIsValidString = true;
        }
    }
}
else {
    bIsValidString = false;
}

(bIsValidString) ? console.log("YES") : console.log("NO");