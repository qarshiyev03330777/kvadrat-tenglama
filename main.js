var a = parseInt(prompt("a qiymatni kiriting"), 10);
var b = parseInt(prompt("b qiymatni kiriting"), 10);
var c = parseInt(prompt("c qiymatni kiriting"), 10);
var D = b*b-4*a*c;

if (D < 0){
    console.log("Yechim yo'q");
}
else if(D == 0){
    console.log(x = -b/2*a);
}
else{
    var x1 = (-b+Math.sqrt(D)) /2*a;
    var x2 = (-b-Math.sqrt(D)) /2*a;
    console.log(x1);
    console.log(x2);
}

