function gcd() {
    
   var x = parseInt(document.getElementById("a").value);
   var y = parseInt(document.getElementById("b").value);
   var txt;

   for ( i = 1; i <= x && i <= y; i++) {

    if (x % i == 0 && y % i == 0) {
        var z = i;
        console.log(z);

        txt = "The GCD for " + x + " and " + y + " is = " + z;
    }
    document.getElementById("demo").innerHTML = txt;
   }
   //document.getElementById("a").reset();
  // document.getElementById("b").value=" ";
}
