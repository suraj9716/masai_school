 var box = "";
  for(var i =num.length-1;i>=0;i--){
      box = box + num[i];
  }
  if(box==num){
      console.log("Yes")
  }
  else{
      console.log("No")
      
  }


    var rem =0;
    var output=0;
     while(num>0){
      rem = num%10;
      output = output*10+rem;
      num = Math.floor(num/10);
      console.log(num)
  }
  if(num==output){
      console.log("Yes");
  }
  else{
      console.log("No");
  }
  console.log(output);
  console.log(num);
  