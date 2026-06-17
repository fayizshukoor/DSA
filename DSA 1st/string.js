/*
  STRING DSA QUICK REVISION
  Run: node string.js

  How to revise fast:
  1. Read the "Idea" line first.
  2. Check Time/Space.
  3. Look at the dry run console output.
*/

const print = (title, value) => console.log(title, value);

// ---------------------------------------------------------------------------
// 1. REVERSE WORDS IN A STRING WITHOUT USING SPLIT/REVERSE/JOIN
// ---------------------------------------------------------------------------
// Problem: "the sky is blue" -> "blue is sky the"
// Idea: Start from the end, skip spaces, collect each word, add it to result.
// Time: O(n), Space: O(n)

function reverseWords(str) {
  let i = str.length - 1;
  let result = "";

  while (i >= 0) {
    while (i >= 0 && str[i] === " ") {
      i--;
    }

    if (i < 0) break;

    const end = i;

    while (i >= 0 && str[i] !== " ") {
      i--;
    }

    const start = i + 1;
    const word = str.slice(start, end + 1);

    result = result === "" ? word : result + " " + word;
  }

  return result;
}

print("Reverse words:", reverseWords("the sky is blue"));
print("Reverse words with extra spaces:", reverseWords("  hello   good morning  "));

// ---------------------------------------------------------------------------
// 2. FIND SECOND LONGEST WORD
// ---------------------------------------------------------------------------
// Problem: "hello good morning everyone" -> "morning"
// Idea: Build words character by character, then update longest and second longest.
// Note: This returns the second longest word with a smaller length than longest.
// Time: O(n), Space: O(1), ignoring the output word storage

function secondLongestWord(str) {
  let currentWord = "";
  let longest = "";
  let secondLongest = "";

  for (let i = 0; i <= str.length; i++) {
    const char = str[i];

    if (isAlphaNumeric(char)) {
      currentWord += char;
    } else if (currentWord.length > 0) {
      if (currentWord.length > longest.length) {
        secondLongest = longest;
        longest = currentWord;
      } else if (
        currentWord.length > secondLongest.length &&
        currentWord.length < longest.length
      ) {
        secondLongest = currentWord;
      }

      currentWord = "";
    }
  }

  return secondLongest;
}

function isAlphaNumeric(char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9")
  );
}

print("Second longest word:", secondLongestWord("hello good morning everyone"));
// longest = "everyone", second longest = "morning"

// ---------------------------------------------------------------------------
// 3. REPLACE EACH VOWEL WITH ITS NEXT CHARACTER
// ---------------------------------------------------------------------------
// Problem: "hello world" -> "hlll  wrrld"
// Idea: If a character is vowel, add the character next to it in the string.
// Note: If the vowel is the last character, keep the vowel because no next character exists.
// Time: O(n), Space: O(n)

function replaceVowelsWithNextCharacter(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i]) && str[i + 1] !== undefined) {
      result += str[i + 1];
    } else {
      result += str[i];
    }
  }

  return result;
}

function isVowel(char) {
  const lowerChar = char.toLowerCase();
  return (
    lowerChar === "a" ||
    lowerChar === "e" ||
    lowerChar === "i" ||
    lowerChar === "o" ||
    lowerChar === "u"
  );
}

print("Replace vowels with next character:", replaceVowelsWithNextCharacter("hello world"));
print("Replace vowels at end:", replaceVowelsWithNextCharacter("hello"));

// ---------------------------------------------------------------------------
// 4. REPLACE EACH CHARACTER WITH N-TH NEXT ALPHABET CHARACTER
// ---------------------------------------------------------------------------
// Problem: ("abc", 2) -> "cde"
// Idea: Convert character to ASCII code, move n steps, wrap using modulo 26.
// Time: O(n), Space: O(n)

function replaceWithNth(str, n) {
  let result = "";

  for (let char of str) {
    if (char >= "a" && char <= "z") {
      result += shiftChar(char, n, 97);
    } else if (char >= "A" && char <= "Z") {
      result += shiftChar(char, n, 65);
    } else {
      result += char;
    }
  }

  return result;
}

function shiftChar(char, n, baseCode) {
  const alphabetPosition = char.charCodeAt(0) - baseCode;
  const shiftedPosition = (alphabetPosition + n) % 26;
  return String.fromCharCode(shiftedPosition + baseCode);
}

print("Replace with 2nd next:", replaceWithNth("abc", 2));
print("Replace with wrap:", replaceWithNth("xyz XYZ", 2));
