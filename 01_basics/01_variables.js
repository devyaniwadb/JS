const accountId = 144553
let accountEmail = "devyaniwadbude19@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// accountId=4 // not allowed
accountEmail ="dw@dw.com"
accountPassword="121212"
accountCity ="bhopal"
console.log(accountId)
/*
  Prefer not to use var
  because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity])