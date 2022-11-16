document.write("1. Declaration Using Array Literal---><br><br>")


document.write("Example I:-<br>")
var literalEx_1 = ['HTML','CSS','JavaScript','JAVA'+"<br>"]
document.write(literalEx_1[0]+"<br>")
document.write(literalEx_1[1]+"<br>")
document.write(literalEx_1[2]+"<br>")
document.write(literalEx_1[3]+"<br><br>")

document.write("Example II:-<br>")
var literalEx_2 = [] // 
literalEx_2[0] = "Jquery"
literalEx_2[1] = "SQL"
literalEx_2[2] = "Bootstrap"
document.write(literalEx_2[0]+"<br>")
document.write(literalEx_2[1]+"<br>")
document.write(literalEx_2[2]+"<br><br><br>")


document.write("2. Declaration Using Array Constructor---><br>")
document.write("In this methiod of array 'new' keyword is used to create instance of array<br><br>")

document.write("Example I:-<br>")
var constructEx_1 = new Array('PHP','JAVA','CSS','MongoDB')
document.write(constructEx_1[0]+"<br>")
document.write(constructEx_1[1]+"<br>")
document.write(constructEx_1[2]+"<br><br>")

document.write("Example II:-<br>")
var constructEx_2 = new Array() 
constructEx_2[0] = "Dot Net"
constructEx_2[1] = "AJAX"
constructEx_2[2] = "Flexbox"
document.write("By writing just name of variable, all values of array will be print here...<br>"+constructEx_2+"<br><br><br>")


document.write("3. Modifying Array Element---><br><br>")

var modify = new Array() 
modify[0] = "Mod 1"
modify[1] = "Mod 2"
modify[2] = "Mod 3"
document.write(modify+"<br>")
modify[1] = "Modified Mod-2"
modify[2] = 333
document.write("In this we updated values of array element 1 & 2 so new values are... <br>"+modify+"<br><br><br>")


document.write("4. Removing Array Elements---><br><br>")

var remove = new Array() 
remove[0] = "Remove - 1"
remove[1] = "Remove - 2"
remove[2] = "Remove - 3"
document.write(remove+"<br>")
delete remove[1]
document.write("In this we deleted 1 array element, so after it remaining arrays are <br>"+remove+"<br><br><br>")


document.write("5. Length Property of Array---><br><br>")

var len = new Array() 
len[0] = "L-1"
len[1] = "L-2"
len[2] = "L-3"
document.write("Here we get lentgh of this array is:- "+len.length+"<br><br><br>")



document.write("6. Array with For Loop---><br><br>")

var floop = new Array() 
floop[0] = "Floop-1"
floop[1] = "Floop-2"
floop[2] = "Floop-3"

for(i=0; i<floop.length; i++)
{
    document.write(floop[i]+"<br>")
}
document.write("<br><br><br>")



document.write("7. Array with For-Each Loop---><br>In this we can print index + values together.<br><br>")

var fEloop = new Array() 
fEloop[0] = "Floop-1"
fEloop[1] = "Floop-2"
fEloop[2] = "Floop-3"
fEloop[3] = "Floop-4"

fEloop.forEach(function (value, index) // remember the syntax
{
    document.write(index+"= "+value+ "<br>")   // & print line also.
});
document.write("<br><br><br>")



document.write("8. Array with For-Of Loop---><br> In this loop we can access Values in another variable by creatin it in syntax.<br><br>")

var forofloop = new Array() 
forofloop[0] = "Floop-1"
forofloop[1] = "Floop-2"
forofloop[2] = "Floop-3"
forofloop[3] = "Floop-4"

for (var transferToIt of forofloop)  // value from forofloop are transfer to new var i.e. transferToIt. 
{
    document.write(transferToIt+"<br>")
}

document.write("<br><br><br>")



document.write("9. Array with For-In Loop---><br> <br> In this loop we can access Index in another variable by creatin it in syntax.<br><br>")

var forinloop = new Array() 
forinloop[0] = "Floop-1"
forinloop[1] = "Floop-2"
forinloop[2] = "Floop-3"
forinloop[3] = "Floop-4"

for (var accessIndx in forinloop)  // value from forofloop are transfer to new var i.e. transferToIt. 
{
    document.write(accessIndx+"<br>") // it print index   remember syntax
    document.write(forinloop[accessIndx]+"<br>") // it print values   remember syntax
   
}

document.write("<br><br><br>")



document.write("10. Multidimensional Array:- we can declare it in a below way<br><br>")

document.write("Type-1<br>")
var multArray1 = [[], []]
multArray1[0][0] = "Flash"  
multArray1[0][1] = "tushar@gmail"  
multArray1[0][2] = 222142  
multArray1[1][0] = "Morningstar"
multArray1[1][1] = "lucifer"  
multArray1[1][2] = 19919119 
document.write("Value stored in this address is: "+ multArray1[1][2]+"<br>")


document.write("<br>Type-2")
var multArray2 = [["spot-00", "spot-01", "spot-02"], [10,11,12]]
document.write("<br> Value stored in this address is: "+ multArray2[0][2]+"<br>")


document.write("<br>Type-3")
var multArray3 = [["loop-00", "loop-01", "loop-02"], [10,11,12]]
for(i=0; i<2; i++)
{
    for(j=0; j<3; j++)
    {
        document.write("<br>"+multArray3[i][j])
    }
    // document.write("<br>")
}

document.write("<br><br><br>")


document.write("11. Array Methods.<br><br>")

document.write("Method I - 'concat'<br>")
var strg1 = [10,20,320,430]
var strg2 = ["java","html","css"]
var strg3 = strg2.concat(strg1)
document.write("After concatinate both strings will be print in single line as: "+strg3+"<br><br>")

document.write("Method II - 'join'<br>")
var strjoin1 = ["java","html","css"]
var strjoin2 = strjoin1.join(" * ")
document.write("After join all contents are join by our symbol that we mention: "+strjoin2+"<br><br>")

document.write("Method III - 'reverse'<br>")
var strrev1 = ["java","html","css"]
document.write("Its our main content: "+strrev1+"<br>")
var strrev2 = strrev1.reverse()
document.write("Saem content after applying reverse property: "+strrev2+"<br><br>")

document.write("Method IV - 'reverse'<br>")
var strslice1 = ["java","html","css","javascript","MongoDB"]
document.write("Its our main content: "+strslice1+"<br>")
var strslice2 = strslice1.slice(1,4)
document.write("After applying slicing with address except that it print other element: "+strslice2+"<br><br>")

document.write("Method V - 'push'<br>")
var strpush1 = ["java","html","css","javascript","MongoDB"]
document.write("Its our main content: "+strpush1+"<br>")
var strpush2 = strpush1.push("FRONT-END")
document.write("After applying push, that element will print at last position: "+strpush2+"<br><br>")
//  LITTLE ERROR HERE MAY BE

document.write("Method VI - 'pop'<br>")
var strpop1 = ["java","html","css","javascript","MongoDB"]
document.write("Its our main content: "+strpop1+"<br>")
var strpop2 = strpop1.pop()
document.write("Last element will deleted: "+strpop2+"<br><br>")
//  LITTLE ERROR HERE MAY BE

document.write("Method VI - 'shift'<br>")
var strshift1 = ["java","html","css","javascript","MongoDB"]
document.write("Its our main content: "+strshift1+"<br>")
var strshift2 = strshift1.shift()
document.write("Last element will deleted: "+strshift2+"<br><br>")
//  LITTLE ERROR HERE MAY BE

// unshift is last property