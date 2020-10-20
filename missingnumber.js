var numbers = [1, 2, 3, 5, 6, 7, 9, 10]; // Missing 2,6
var missing = [];

//function urutan(a,b){
 //   return a-b;
 //  }
   
 //  numbers.sort(urutan);
 //  document.write("Diurutkan dengan fungsi perbandingan  : "+numbers+"<br><br>");

// Find the missing array items
for ( var i = 0; i < numbers.length; i++ ) {
    
    if ( (numbers[i+1] - numbers[i]) > 1 ) {
        missing.push( numbers[i+1] - numbers[1] );   
    }
}

document.write( missing +"<br><br>");
