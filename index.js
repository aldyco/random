const charMap = {
  J: "DJ",
C: "TJ",
Y: "J",
NY: "NJ",
SY: "SJ",
KH: "CH",
U: "OE"
};

function transform (input) {
  const inputArr = input.split("");
  for (var i = 0 ; i < inputArr.length; i++) {
    if (charMap[inputArr[i].toUpperCase()] != undefined ) {
      inputArr[i] = charMap[inputArr[i].toUpperCase()];
    }
    else if (inputArr[i] == " ") {
      inputArr[i] = "-";
    }
    else {
      inputArr[i] = inputArr[i].toUpperCase()
    }
  }

  return inputArr.join("")
}

function transform2 (arr) {
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i] * 2 + 100;
    if (num == 0 || num > 500) {
      arr[i] = "blank"
    } else if (num < 200) {
      arr[i] = "low: " + num;
    } else if (num >= 200 && num <= 500) {
      arr[i] = "high: " + num
    }

  }
  return arr;
}


