// Problem 1: Print the Calendar date in the below format
// ```
// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12
for(var month = 1;month<=12;month++){
  var days = 31;
  if(month == 2){
    days = 28;
  }
  else if(month == 4 || month ==6 || month==9 || month ==11){
    days = 30;
  }
  switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("March");
        break;
  }
  for(var day=1;day<=days;day++){
    console.log(day,"_",month)
  }
}