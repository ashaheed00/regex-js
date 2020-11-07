const pinCodeRegex = RegExp("^\\d{6}$");

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
