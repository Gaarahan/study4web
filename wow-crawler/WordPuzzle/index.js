const utils = require("../utils.js");
const fs = require("fs");
const path = require("path");

async function getStartsWith(char) {
  let WORD_DIC;
  try {
    WORD_DIC = JSON.parse(fs.readFileSync(path.join(__dirname, "./WORD_DIC.json")));
    if (!WORD_DIC) {
      throw new Error("WORD_DIC is empty");
    }
  } catch (e) {
    WORD_DIC = {};
  }

  if (WORD_DIC[char] && WORD_DIC[char].length > 0) {
    return WORD_DIC[char];
  }

  console.log('Can not get exist dictionary, try to get from internet\n\n');

  const dom = await utils.getDomFromUrl(
    `https://www.thefreedictionary.com/words-that-start-with-${char}#w5`
  );

  const wordsEle = dom.querySelectorAll("div#w5 ul li");
  const wordsList = Array.from(wordsEle).map((ele) => ele.textContent);

  WORD_DIC[char] = wordsList;
  fs.writeFileSync(
    path.join(__dirname, "./WORD_DIC.json"),
    JSON.stringify(WORD_DIC)
  );

  return wordsList;
}

async function main() {
  const startWithChar = "p";
  const includes = {
    o: [0, 2],
    r: [1, 3],
    y: [4],
  };
  const excludes = [
    "a",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "l",
    "m",
    "n",
    "s",
    "t",
    "u",
    "v",
  ];

  console.log(`Search words that start with ${startWithChar}\n\n`);

  const allWordsList = await getStartsWith(startWithChar);

  console.log(`Start filter by includes and excludes:`);
  console.log(`Include: ${Object.keys(includes).join(", ")}`);
  console.log(`Exclude: ${excludes.join(", ")}`);
  const filteredWithIncludeAndExclude = allWordsList.filter((word) => {
    const wordArr = word.split("");
    const includesRes = Object.keys(includes).every((char) =>
      wordArr.includes(char)
    );
    const excludesRes = excludes.every((char) => !wordArr.includes(char));
    return includesRes && excludesRes;
  });
  console.log(
    `Filter results: ${filteredWithIncludeAndExclude.join(", ")}\n\n`
  );

  console.log(`Start filter by locations:`);
  console.log(`Includes and location: ${JSON.stringify(includes)}`);

  const res = filteredWithIncludeAndExclude.filter((word) => {
    const wordArr = word.split("");

    const isInCorrectLocation = Object.keys(includes).every((char) => {
      const charIndexList = wordArr.reduce((acc, cur, index) => {
        if (cur === char) {
          acc.push(index);
        }
        return acc;
      }, []);

      const includesIndex = includes[char];
      if (includesIndex.length === 1) {
        return (
          charIndexList.length === 1 && charIndexList[0] === includesIndex[0]
        );
      } else {
        return charIndexList.every((index) => includesIndex.includes(index));
      }
    });

    return isInCorrectLocation;
  });

  console.log(res.length > 0 ? `Result: ${res}` : "No words found");
}

main();

// all char list
/*
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  */
