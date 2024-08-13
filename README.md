# SIU-JavaScript-Assessment

Solve 3 problems in the `problems` folder. Test cases are provided in `index.js`. Work on the problems in their respective files, uncomment the appropriate test case(s) and run `index.js` or individual file to see if your solution is working. Follow the [Getting Started](#GettingStarted) section below and the [Completion](##Completion) section at the bottom of this README.

### Important
Do not use any LLMs or AI assistance of any sort. 
You may refer to the official JavaScript documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript] or the official git documentation [https://git-scm.com/doc] but do not search the internet for solutions or help. 
This exercise is to determine your skills in solving problems and developing logic using JavaScript.
Do not alter the file structure.

# Getting Started
1. Ensure Node.js is installed on your device BEFORE BEGINNING ASSESSMENT. Use Fiserv Software Center for installation.
2. Fork and clone this repo - no branches, no PRs
3. Launch repo in your IDE of choice
4. Run the index.js file by entering the following command in your terminal: 'node index.js'. You should see the following in your terminal output:
   Hello Assessment!

## Problem 1 - Replace Spaces
Write a function, replaceSpaces, that takes in two strings as an argument. The first string is a sentence with at least 1 space. The second string is a single character. The function should return the sentence, but with any space(s) replaced by the second argument.

```
replaceSpaces('Today is a good day', '-'); // -> 'Today-is-a-good-day'
```

## Problem 2 - Most Frequent Character
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.


```
mostFrequentChar('bookeeper'); // -> 'e'
```
The input string is non-empty.

## Problem 3 - Compress
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

```
'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

compress('ccaaatsss'); // -> '2c3at3s'
```
The input only contains alphabetic characters.

# Completion
Before time is up, git add, git commit and git push to YOUR FORK.
Do not create any Pull Requests.