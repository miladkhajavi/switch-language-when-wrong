const FA = require("./engToFa.json");
const switchToPersian = FA;
const space = ' ';
const switchTextLanguages = (input) => input.trim().split('').map(result => result === space ? space : (switchToPersian.hasOwnProperty(result) ? switchToPersian[result] : result)).join('');
console.log(switchTextLanguages("sghl o,fd ]ofv")); // سلام خوبی چخبر