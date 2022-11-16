document.write("Hoisting- &nbsp Its a JavaScript mechanism where variables & function declaration are moved to the top of their scope before code execution.<br><br><br><br>")
//nbsp used for soace

document.write("CODE - I:-<br>")
var x = 20; //we initalize value in this way
var y = 30;
document.write("addition of variable x & y is: "+ (x+y) + "<br><br>");


document.write("CODE - II:-<br>")
var a,b; // we also declare in this way
a=30;  // and initilaize in this way
b=40;  // both are correct
document.write("Values stored in variable a & b is: "+ a+","+b + "<br><br>");


document.write("CODE - III:-<br>")
var c=20 // 
document.write(c+","+d+"<br><br>") // print o/p before declare var 'd'.
var d=30 // it will print o/p as c=20 & d=undefined.


document.write("CODE - IV:-<br>")
var e=30 // Delared + Initialize
var f   // Just Declared only
document.write(e+","+f+"<br><br>")
// it will print o/p as e=30 & f=undefined


document.write("CODE - V:-<br>")
var g=30 // Delared + Initialize
h = 20   // Just Initialize value only
document.write(g+","+h+"<br><br>")
var h    // here we declared after inialization.

// it will print o/p as g=30 & h=20
// cauz, hoisting mechanism moved variable & declaration to top before execution as per definition.

