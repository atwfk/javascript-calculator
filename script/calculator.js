function clean(){
    var clean = document.getElementById("textview");
    clean.value = "";
}
function button(num){
    var a = document.getElementById("textview");
    a.value = a.value+num;
}
function back(){
    var back = document.getElementById("textview");
    var f =back.value.split('');
    f.pop();
   var t = f.join("");
   back.value = t;
}
function equal(){
        document.form.textview.value = eval(document.form.textview.value);
        var norun = document.getElementById("back");
        norun.onclick = " ";
}
function qe(){
    var a = prompt("a = ");
    var b = prompt("b = ");
    var c = prompt("c = ");
    var d = ((b * b) - (4 * a * c));
    var g = Math.sqrt(d);
    var h = - b + g;
    var i = - b - g;
    var rslt1 = h / (2 * a);
    var rslt2 = i / (2 * a);
    if(d >= 0){
    document.form.textview.value = "x = " + rslt1.toFixed(2) + "   x = " + rslt2.toFixed(2);
    }
    else{
        var e = -1;
        g = Math.sqrt(e * d);
        h = - b / (2 * a);
        i = g / (2 * a);
        document.form.textview.value = "x = " + h + "+" + i.toFixed(2) + "i" + "   x = " + h + "_" + i.toFixed(2) + "i";
    }
    var norun = document.getElementById("back");
    norun.onclick = " ";
}
/*
        Properties
Math.E
Math.LN10
Math.LN2
Math.LOG10E
Math.LOG2E
Math.PI
Math.SQRT1_2
Math.SQRT2

        Methods

Math.abs()
Math.acos()
Math.acosh()
Math.asin()
Math.asinh()
Math.atan()
Math.atan2()
Math.atanh()
Math.cbrt()
Math.ceil()
Math.clz32()
Math.cos()
Math.cosh()
Math.exp()
Math.expm1()
Math.floor()
Math.fround()
Math.hypot()
Math.imul()
Math.log()
Math.log10()
Math.log1p()
Math.log2()
Math.max()
Math.min()
Math.pow()
Math.random()
Math.round()
Math.sign()
Math.sin()
Math.sinh()
Math.sqrt()
Math.tan()
Math.tanh()
Math.trunc()
*/
/*
function button0(){
    var o = document.getElementById("textview");
    o.value = o.value + "0";
}
function button1(){
    var a = document.getElementById("textview");
    a.value = a.value + "1";
}
function button2(){
    var b = document.getElementById("textview");
    b.value = b.value + "2";
}
function button3(){
    var c = document.getElementById("textview");
    c.value = c.value + "3";
}
function button4(){
    var d = document.getElementById("textview");
    d.value = d.value + "4";
}
function button5(){
    var e = document.getElementById("textview");
    e.value = e.value + "5";
}
function button6(){
    var f = document.getElementById("textview");
    f.value = f.value + "6";
}
function button7(){
    var g = document.getElementById("textview");
    g.value = g.value + "7";
}
function button8(){
    var h = document.getElementById("textview");
    h.value = h.value + "8";
}
function button9(){
    var i = document.getElementById("textview");
    i.value = i.value + "9";
}
function button10(){
    var j = document.getElementById("textview");
    j.value = j.value + "+";
}
function button11(){
    var k = document.getElementById("textview");
    k.value = k.value + "-";
}
function button12(){
    var l = document.getElementById("textview");
    l.value = l.value + "*";
}
function button13(){
    var m = document.getElementById("textview");
    m.value = m.value + "/";
}
function button14(){
    var n = document.getElementById("textview");
    n.value = n.value + ".";
}
*/

