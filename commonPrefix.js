//jshint esversion:6
const longestCommonPrefix = function(strs) {
    if (strs.length< 1){
        return "";
    } else if (strs.length == 1) {
        return strs[0];
    }
    const firstString = strs[0];
    let occurrenceCount = Number.POSITIVE_INFINITY;
    const firstStringArrayRep = firstString.split("");
    for (let outerIter=1; outerIter < strs.length; outerIter++){
        const splitStringRep = strs[outerIter].split("");
        let counter = 0;
        if(strs[outerIter].length == 0){
            return "";
        }
        while (counter < strs[outerIter].length && splitStringRep[counter] == firstStringArrayRep[counter]){
            counter += 1;
        }
        if (counter == 0) {
            return "";
        }
        occurrenceCount = Math.min(occurrenceCount, counter);
    }
    return firstStringArrayRep.slice(0, occurrenceCount).join("");
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));