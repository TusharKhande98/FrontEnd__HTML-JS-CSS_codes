document.write("1. Floor Method- which rounded the number that we give<br>")
var val1 = 40.6
var ans1 = Math.floor(val1)
document.write("Given value is: " + val1 + "<br>")
document.write("Rounded value is: " + ans1 + "<br><br>")


document.write("2. Log Method- returns natural logarithm value(base E of no.)<br>")
var val2 = 4
var val3 = -4
var ans2 = Math.log(val2)
var ans3 = Math.log(val3)
document.write("Value is: " + "<br>")
document.write("Log of "+val2+" is: " +ans2 + "<br>")
document.write("Log of negative value is always 'NaN' as below.<br>")
document.write("Log of "+val3+" is: " +ans3 + "<br><br>")


document.write("3. Max & Min Method- finds greater no.<br>")
var min_max = Math.max(30,40,15,47,8,5,66,666,718,1)
document.write("Greater number is: " + min_max + "<br>")
var min_max = Math.min(30,40,15,47,8,5,66,666,718,09)
document.write("Smaller number is: " + min_max + "<br><br>")


document.write("4. Power Method- calculate power of a no.<br>")
var power = Math.pow(6,3)
document.write("6 to the power 3 is: " + power + "<br><br>")


document.write("5. Random Method- gives random value between 0 to 1. <br>")
var ram = Math.random()
document.write(ram + "<br><br>")


document.write("6. Round Method- its same as floor method, but if point value is above 5 i.e. 60.6 so it will print next round value as 61. <br>")
var rnd1 = 60.6
var rnd2 = Math.round(rnd1)
var rnd3 = Math.round(53.4)
document.write("Given value is: " + rnd1 + "<br>")
document.write("Rounded value is: " + rnd2 + "<br>")
document.write("point value is <.5 so it will : " + rnd3 + "<br><br>")


document.write("7. Square Root Method- Gives square root's no.<br>")
var sqroot = Math.sqrt(49)
document.write("Square root is: " + sqroot + "<br><br>")


