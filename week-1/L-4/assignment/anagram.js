//anagram

//split the string 1  into an array
// sort an array
// join the sorted array
// same with the string 2 ()



function isAnagram(str1,str2) {
    const arr1=str1.toLowerCase().split("").sort().join("");
    

    const arr2=str2.toLowerCase().split("").sort().join("");
     
    if (sortdedString1 == sortedString2) {
        return true;

    } else {
        return false;
    }

}

module.exports = isAnagram;
    