/* jshint esversion:6 */
const nearestPalindromic = function (n) {
    if (Number(n) < 10){
        return String(Number(n) - 1);
    }
    const stringVersionOfN = String(n);
    let midPointOfStringN = stringVersionOfN.substring(
      0,
      Math.ceil(stringVersionOfN.length / 2)
    );
    let reverseOfMidpointOfStringN,
      reversedPalindrome,
      stringVersionOfReversedPalindrome;
    if (stringVersionOfN.length % 2 == 0) {
      reverseOfMidpointOfStringN = midPointOfStringN.split("").reverse().join("");
      reversedPalindrome = Number(
        String(midPointOfStringN) + String(reverseOfMidpointOfStringN)
      );
      stringVersionOfReversedPalindrome = String(reversedPalindrome);
    } else {
      reverseOfMidpointOfStringN = stringVersionOfN.substring(
        0,
        Math.floor(stringVersionOfN.length / 2)
      );
      reversedPalindrome = Number(
        midPointOfStringN +
          reverseOfMidpointOfStringN.split("").reverse().join("")
      );
      stringVersionOfReversedPalindrome = String(reversedPalindrome);
    }
    if (n < reversedPalindrome) {
      const remainder = String(n).length % 2;
      console.log("Reminder ", remainder);
      let midValue, concatenatedStringWithOneSubstractedToMiddleElt;
      if (remainder != 0) {
        midValue = stringVersionOfReversedPalindrome.slice(
          stringVersionOfReversedPalindrome.length / 2,
          stringVersionOfReversedPalindrome.length / 2 + 1
        );
        midValue -= 1;
        concatenatedStringWithOneSubstractedToMiddleElt =
          stringVersionOfReversedPalindrome.slice(
            0,
            stringVersionOfReversedPalindrome.length / 2
          ) +
          midValue +
          stringVersionOfReversedPalindrome.slice(midValue + 2);
      } else {
        midValue = stringVersionOfReversedPalindrome.slice(
          stringVersionOfReversedPalindrome.length / 2 - 1,
          stringVersionOfReversedPalindrome.length / 2 + 1
        );
        const oneReducedFromMiddleNumbers = Array.from(midValue)
          .map((c) => Number(c) - 1)
          .join("");
        concatenatedStringWithOneSubstractedToMiddleElt = stringVersionOfReversedPalindrome
          .slice(0, stringVersionOfReversedPalindrome.length / 2 - 1)
          .concat(oneReducedFromMiddleNumbers)
          .concat(
            stringVersionOfReversedPalindrome.slice(
              stringVersionOfReversedPalindrome.length / 2 + 1
            )
          );
      }
      if (
        Math.abs(n - reversedPalindrome) >
        Math.abs(n - Number(concatenatedStringWithOneSubstractedToMiddleElt))
      ) {
        return String(concatenatedStringWithOneSubstractedToMiddleElt);
      } else {
        return String(reversedPalindrome);
      }
    } else if (n > reversedPalindrome) {
      const remainder = String(n).length % 2;
      let midValue, concatenatedStringWithOneAddedToMiddleElt;
      if (remainder != 0) {
        midValue = stringVersionOfReversedPalindrome.slice(
          Math.floor(stringVersionOfReversedPalindrome.length / 2),
          Math.floor(stringVersionOfReversedPalindrome.length / 2 + 1)
        );
        midValue = Number(midValue) + 1;
        concatenatedStringWithOneAddedToMiddleElt =
          stringVersionOfReversedPalindrome.slice(
            0,
            stringVersionOfReversedPalindrome.length / 2
          ) +
          String(midValue) +
          stringVersionOfReversedPalindrome.slice(stringVersionOfReversedPalindrome.length / 2 + 1);
      } else {
        midValue = stringVersionOfReversedPalindrome.slice(
          stringVersionOfReversedPalindrome.length / 2 - 1,
          stringVersionOfReversedPalindrome.length / 2 + 1
        );
        const oneAppendedToMiddleNumbers = Array.from(midValue)
          .map((c) => Number(c) + 1)
          .join("");
        concatenatedStringWithOneAddedToMiddleElt = stringVersionOfReversedPalindrome
          .slice(0, stringVersionOfReversedPalindrome.length / 2 - 1)
          .concat(oneAppendedToMiddleNumbers)
          .concat(
            stringVersionOfReversedPalindrome.slice(
              stringVersionOfReversedPalindrome.length / 2 + 1
            )
          );
      }
      if (
        Math.abs(n - reversedPalindrome) >
        Math.abs(n - Number(concatenatedStringWithOneAddedToMiddleElt))
      ) {
        return String(concatenatedStringWithOneAddedToMiddleElt);
      } else {
        return String(reversedPalindrome);
      }
    }
  };
  
  console.log("returned value ", nearestPalindromic(8691));