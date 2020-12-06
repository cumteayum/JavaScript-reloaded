let regex = /ish[a-zA-Z]/

let str = "ish783 nagar";
console.log(regex.exec(str));

if(regex.test(str)){
  console.log("Matched");
}else {
  console.log("Not matched");
}
