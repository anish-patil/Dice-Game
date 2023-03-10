// Inputs name
let name1=prompt("Write player 1 Name")
let name2=prompt("Write player 2 Name")

//Changing inner HTML to suitable player names
document.querySelector(".p1").innerHTML=name1
document.querySelector(".p2").innerHTML=name2

// Randomising the dice
let random_Number1=Math.random()
let random_Number2=Math.random()
let new_random_number1=Math.floor(random_Number1*6)+1
let new_random_number2=Math.floor(random_Number2*6)+1
document.querySelector("img").setAttribute("src","./images/dice"+new_random_number1+".png")
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+new_random_number2+".png")

// if User presses cancel button
if(name1 === null||name2 === null)
{
    location.reload()
}

// condition for if users presses enter and gives an empty String
if(name1!=""&&name2!="")
{
    if(new_random_number1>new_random_number2)
    {
        document.querySelector("h1").innerHTML=name1+" Wins!"
    }
    else if(new_random_number1<new_random_number2)
    {
        document.querySelector("h1").innerHTML=name2+" Wins!"
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw"
    }
}
else{
    location.reload()
}

//this function to reload the page by pressing the button
function myFunction()
{
    location.reload()
}
