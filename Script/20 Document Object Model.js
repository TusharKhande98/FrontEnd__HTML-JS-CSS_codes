function setdata1()
{
    document.getElementById("demo").innerHTML="Hello World!;"
    // 'demo' is a ID name. & innerHTML used to pass a message.
}

function setdata2()
{
    document.getElementById("replaced").innerHTML="2. Replaced Successfully..."
}

function setdata3()
{
    document.getElementById("changeproperty")
    changeproperty.style.color="darkgreen"
    changeproperty.style.background="red"
    changeproperty.style.width="200"
    changeproperty.style.height="80"
    changeproperty.style.padding="20"
    changeproperty.innerHTML="3. Change with inner HTML property"
}


function setdata4()
{
    document.getElementById("uname").value
    alert(name)
    // it shows depricated, reason unknown
}


var inputstring=''
function userinput(value)
// we write value cauz it will pass after we write 'onclick' method 
{
    inputstring+=value
    document.myform2.input.value=inputstring
    // whenever we pass some nos. or symbol it will concatenate as a string with our 'value' parameter from 'userinput' function 
    // if we pass '1'----> 1
    // then we pass '+'----> 1+
    // then we pass '4'----> 1+4
}

// BELOW ARE SOME EXAMPLE OF:- GET_ELEMENT_BY_ID
function openform()
{
    document.getElementById("myform3").style.display="block"
}

function closeform()
{
    document.getElementById("myform3").style.display="none"
}


function loaddata()
{
    document.getElementById("text").innerHTML="Text... "
}

function bolddata()
{
    document.getElementById("text").style.fontWeight="bold"
}
function italicdata()
{
    document.getElementById("text").style.fontStyle="italic"
}
function underlinedata()
{
    document.getElementById("text").style.textDecoration="underline"
}


// BELOW ARE SOME EXAMPLE OF:- GET_ELEMENT_BY_NAME

function datapara()
{
    var x = document.getElementsByName("para")
    alert(x.length)

    // 'para' name comes 4 times so it gives '4'
    document.getElementById("ans").innerHTML=x
    // it will give o/p as '[object NodeList]' 
    document.getElementById("ans").innerHTML=x.innerHTML
    // it will give o/p as 'undefined' , run above line one by one 
    document.getElementById("ans").innerHTML=x[0 ].innerHTML
    // here our paragraph 1 is print cauz it stored on no.1
}


// BELOW ARE SOME EXAMPLE OF:- GET_ELEMENT_BY_TAG_NAME

function datatag()
{
    var a = document.getElementsByTagName("p")
 
    document.getElementById("print").innerHTML=a[0].innerHTML
    // it prints o/p but need different here.. Do It Later
}

function datatagli()
{
    var a = document.getElementsByTagName("li")
 
    document.getElementById("list").innerHTML=a[1].innerHTML
    // This gives o/p properly
}

// BELOW ARE SOME EXAMPLE OF:- GET_ELEMENT_BY_CLASS_NAME

function dataclass()
{
    var a = document.getElementsByClassName("about")
 
    document.getElementById("classname").innerHTML=a.innerHTML
    // here we get o/p as 'undefined'
    document.getElementById("classname").innerHTML=a[0].innerHTML
    // here we get o/p as 'about' properly
    document.getElementById("classname").innerHTML=a[1].innerHTML
    // here we get o/p as 'Blank' we dont get anything
}

function myevent()
{
    alert("Welcome to Alert Event")
}


