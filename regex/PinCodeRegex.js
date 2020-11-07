const pinCodeRegex = RegExp("^[0-9]{3}\\s?[0-9]{3}$");

function testPinCode(pinCode) {
  if (pinCodeRegex.test(pinCode)) return true;
  else throw "Given Pin Code is in wrong format";
}

// Pin Code - UC1
console.log(testPinCode("400088"));

// Pin Code - UC2
try {
  console.log(testPinCode("A400088"));
} catch (e) {
  console.error(e);
}

// Pin Code - UC3
try {
  console.log(testPinCode("A400088"));
} catch (e) {
  console.error(e);
}

// Pin Code - UC4
try {
  console.log(testPinCode("400 088"));
} catch (e) {
  console.error(e);
}
