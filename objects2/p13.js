var S = "thisracecarisgood";
var count = 0;
    for(var i =0;i<=S.length;i++){
        var bag = "";
        for(var j =i;j<=S.length;j++){
            bag+= S[j];
            console.log( bag)
            var result = "";
            for(var k =bag.length-1;k>=0;k--){
            
                    result += bag[k]
                if(result==bag){
                    if(result.length>count){
                     count = result.length;
                    }
                }
            }
    }
    }
    console.log(count)