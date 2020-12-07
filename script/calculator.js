function clean() {
  var clean = document.getElementById("textview");
  clean.value = "";
}
function button(num) {
  var a = document.getElementById("textview");
  a.value = a.value + num;
}
function back() {
  var back = document.getElementById("textview");
  var f = back.value.split("");
  f.pop();
  var t = f.join("");
  back.value = t;
}
function equal() {
  document.form.textview.value = eval(document.form.textview.value);
  var norun = document.getElementById("back");
  norun.onclick = " ";
}
function qe() {
  var a = prompt("a = ");
  var b = prompt("b = ");
  var c = prompt("c = ");
  var d = b * b - 4 * a * c;
  var g = Math.sqrt(d);
  var h = -b + g;
  var i = -b - g;
  var rslt1 = h / (2 * a);
  var rslt2 = i / (2 * a);
  if (d >= 0) {
    document.form.textview.value =
      "x = " + rslt1.toFixed(2) + "   x = " + rslt2.toFixed(2);
  } else {
    var e = -1;
    g = Math.sqrt(e * d);
    h = -b / (2 * a);
    i = g / (2 * a);
    document.form.textview.value =
      "x = " +
      h +
      "+" +
      i.toFixed(2) +
      "i" +
      "   x = " +
      h +
      "_" +
      i.toFixed(2) +
      "i";
  }
  var norun = document.getElementById("back");
  norun.onclick = " ";
}
