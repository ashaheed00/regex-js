const emailRegex = RegExp(
  "^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$"
);

function testEmail(email) {
  if (emailRegex.test(email)) return true;
  else throw "Given email is in wrong format";
}

// Email - UC3
try {
  console.log(testEmail("abc.xyz@bridgelabz.co"));
} catch (e) {
  console.error(e);
}

// Email - UC4
try {
  console.log(testEmail("abc.xyz@bridgelabz.co.in"));
} catch (e) {
  console.error(e);
}
