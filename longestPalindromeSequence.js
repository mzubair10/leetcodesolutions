//jshint esversion:6
const longestPalindrome = function (s) {
  const splitString = s.split("");
  let visitedCharsArray = [];
  let maxLength = 0;
  let maxStringPalindrome = "";
  while (splitString.length > 0) {
    for (let iter = 0; iter < splitString.length; iter++) {
      visitedCharsArray.push(splitString[iter]);
      let reversedCharString = visitedCharsArray.slice().reverse().join("");
      if (
        reversedCharString == visitedCharsArray.join("") &&
        reversedCharString.length > maxLength
      ) {
        maxStringPalindrome = reversedCharString;
        maxLength = reversedCharString.length;
      }
      //console.log("XX ", visitedCharsArray.join(""), reversedCharString);
    }
    splitString.shift();
    visitedCharsArray = [];
  }
  return maxStringPalindrome;
};

console.log(longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"));