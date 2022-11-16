function myimg1()
{
    var x = document.getElementById("img1").src 
    // here we access path of image & stored in 'x'
    document.getElementById("accesssrc").innerHTML = x
    // we cannnot print 'x' directly thats why we we stored value of 'x' in 'accessscrc' ID, then we print source of image using--> accesssrc
    
    
    var y = document.getElementById("img1").width 
    document.getElementById("accesWidth").innerHTML = y

}


function myimg2()
{    
    var y = document.getElementById("img1").width 
    document.getElementById("accesWidth").innerHTML = y
  
    var z = document.getElementById("img1").height 
    document.getElementById("accesHeight").innerHTML = z

}


function setImg()
{    
    document.getElementById("img1").src='/background Images/Devel - 16.jpg'
    document.getElementById("img1").width="600",height="320"
  

}

