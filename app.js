//Question 1
function convertFahrToCelsius(fTemp) {
  var message = ''
  if (typeof fTemp == 'object') {
    if (Array.isArray(fTemp)) {
      message = `${fTemp} is not a valid number but an array`;
    } else {
      message = `${JSON.stringify(fTemp)} is not a valid number but an object`;
    }
  } else {
    var num = (parseInt(fTemp) - 32) * 5 / 9;
    var fToCel = num.toFixed(4)
    message = fTemp = fToCel;
  }
  return message
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({
  temp: 0
}));

// Question 2
function checkYuGiOh(number) {
  const resArr = [];
  if (isNaN(number)) {
    console.log(`invalid parameter: ${number}`)
    return `invalid parameter: ${number}`

  }

  for (let i = 1; i <= number; i++) {

    let replace = []
    if (i % 2 == 0) {
      replace.push("yu")
    }
    if (i % 3 == 0) {
      replace.push("gi")
    }
    if (i % 5 == 0) {
      replace.push("oh");
    }
    if (replace.length > 0) {
      resArr.push(replace.join("-"))
    } else {
      resArr.push(i)
    }

  }
  console.log(resArr);
  return resArr;
}
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizbuzz is meh");





