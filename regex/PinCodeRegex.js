const pinCodeRegex = RegExp("^\\d{6}$");

function testPinCode(pinCode) {
  if (pinCodeRegex.test(pinCode)) return true;
  else throw "Given Pin Code is in wrong format";
}

// Pin Code - UC1
console.log(testPinCode(400088));
