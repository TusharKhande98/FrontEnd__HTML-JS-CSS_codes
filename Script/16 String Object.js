var val = new String("Welocme to JavaScript<br>")
document.write(val)

document.write("String Methods as below:- <br><br>")

document.write("1. Length(display length of string)- <br>")
document.write(val.length + "<br><br>")


document.write("2. CharAt(display position of character in string- <br>")
document.write(val.charAt(0) + "<br>")
document.write(val.charAt(10) + "<br>")
document.write(val.charAt(14) + "<br>")
document.write(val.charAt(15) + "<br><br>")


document.write("3. CharCodeAt(it gives unicode of letter or no.)- <br>")
document.write(val.charCodeAt(0) + "<br>")
document.write(val.charCodeAt(10) + "<br>")
document.write(val.charCodeAt(14) + "<br><br>")


document.write("4. Concatinate(join 2 strings)- <br>")
var cot1 = new String("Hey,")
var cot2 = new String(" Mr. Flash")
var cot3 = cot1.concat(cot2)
document.write(cot3)
document.write("<br><br>")


document.write("5. IndexOf(it gives position of character in a string)- <br>")
var ind1 = String("Morningstar<br>")
document.write(ind1)
var ind2 = ind1.indexOf('M')
var ind3 = ind1.indexOf('r')
document.write(ind2 +"<br>")
document.write(ind3 +"<br>")
document.write("<br>")



document.write("6. LastIndexOf(it gives position of character in a string, but search that from last)- <br>")
var lastind1 = String("Morningstar<br>")
document.write(lastind1)
var lastind2 = lastind1.lastIndexOf('M')
var lastind3 = lastind1.lastIndexOf('r')
var lastind4 = lastind1.lastIndexOf('Q')
document.write(lastind2 +"<br>")
document.write(lastind3 +"<br>")
document.write("If character not present so it prints: "+lastind4 + "<br>")
document.write("<br>")
document.write("<br>")



document.write("7. LocalCompare(compare strings & gives o/p according to it in vales as 0,1,-1)- <br>")
var cmp1 = new String("Welcome")
var cmp2 = new String("Welcome_bro")
var cmp3 = new String("Welcome")
var cmp4 = new String("bro_Welcome")
var cmp5 = cmp1.localeCompare(cmp2)
var cmp6 = cmp1.localeCompare(cmp3)
var cmp7 = cmp1.localeCompare(cmp4)
document.write("Here string is different at end: " + cmp5 + "<br>")
document.write("Here string is same: " + cmp6 + "<br>")
document.write("Here string is different at start: " + cmp7 + "<br>")
document.write("<br><br>")



document.write("8. Replace(with a short syntax we can replace words in string as below)- <br>")
var rp1 = new String("welcome to coding")
var rp2 = rp1.replace("to","in" )
document.write(rp1 + "<br>")
document.write(rp2 + "<br>")
document.write("<br><br>")



document.write("9. Split- <br>")
var sp1 = new String("HTML to CSS")
var sp2 = sp1.split("to" )
document.write(sp1 + "<br>")
document.write(sp2 + "<br>")
document.write("<br><br>")



document.write("10. Slice(after giving value only that much letters are print between them)- <br>")
var sl1 = new String("Welcome to slicing")
var sl2 = sl1.slice(2,8)
document.write(sl1 + "<br>")
document.write(sl2 + "<br>")
document.write("<br><br>")



document.write("11. SubStr(same as above just it starts from '0' again after its starting point, observe it carefully)- <br>")
var st1 = new String("Welcome to substring")
var st2 = st1.substring(2,9)
document.write(st1 + "<br>")
document.write(st2 + "<br>")
document.write("<br><br>")



document.write("11. Upper & Lower case- <br>")
var cs1 = new String("MoRninGStAr")
var up1 = cs1.toUpperCase()
var lw1 = cs1.toLowerCase()
document.write("Normal string: " + cs1 + "<br>")
document.write("Converted to upper: " + up1 + "<br>")
document.write("Converted to lower: " + lw1 + "<br>")
document.write("<br>")

document.write("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
document.write("<br><br>")

// FORM STARTS

function userinput()
{
    var usr = document.myform.str.value
    var index = document.myform.index.value
    var ans = new String(usr)
    // whatever we give in textbox that can goes to string
    document.write(ans.length)
    document.write("<br>")
    document.write(ans.charAt(index) )
}
