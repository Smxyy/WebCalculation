function plus(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    if(isNaN(num1) || isNaN(num2))
        alert("Please input number before click buttons");
    document.getElementById("result").innerHTML = num1 + num2;
}

function Minus(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    if(isNaN(num1) || isNaN(num2))
        alert("Please input numbers before clicking any button");
    document.getElementById("result").innerHTML = num1 - num2;
}

function Mul(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    if(isNaN(num1) || isNaN(num2))
        alert("Please input numbers before clicking any button");
    document.getElementById("result").innerHTML = num1 * num2;
}

function Div(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 =  parseInt(num1, 0);
    num2 = parseInt(num2, 0);
    if(isNaN(num1) || isNaN(num2))
        alert("Please input numbers before clicking any button");
    document.getElementById("result").innerHTML = num1 / num2;
}