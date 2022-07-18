let value =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

let name = value.replace(/[^\w\s]/gi, "").split(" ");

let valueArray = [];

let desc = name.map((element) => {
  valueArray.push({
    name: element,
    length: element.length,
    vowelCount: element.match(/[aeiou]/gi).length,
  });
});

valueArray.sort((a, b) => b.length - a.length);
valueArray.sort((a, b) => b.vowelCount - a.vowelCount);
let maximumValue = valueArray[0].length;
let valueData = valueArray.filter((element) => element.length === maximumValue);

if (valueData.length) {
  console.log(valueData[0].name);
} else {
  console.log("Empty Input");
}
