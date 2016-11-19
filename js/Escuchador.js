/* 
 Created on : 20-ene-2014, 19:21:54
 Author     : Julio Cesar Valadez Castañeda
 */
document.addEventListener("DOMContentLoaded", iniciar, false);
function iniciar() {
    document.getElementById("frac").addEventListener('mousedown', function() {
        ponerDigito('\\frac{x}{y}');
    }, false);
    document.getElementById("raiz").addEventListener('mousedown', function() {
        ponerDigito('\\sqrt{x}');
    }, false);
    document.getElementById("fx").addEventListener('mousedown', function() {
        ponerDigito('f(x)=');
    }, false);
    document.getElementById("expon").addEventListener('mousedown', function() {
        ponerDigito('{x}^{y}');
    }, false);
    document.getElementById("inte").addEventListener('mousedown', function() {
        ponerDigito('\\int{}');
    }, false);
    document.getElementById("may_iql").addEventListener('mousedown', function() {
        ponerDigito('\\ge');
    }, false);
    document.getElementById("men_iql").addEventListener('mousedown', function() {
        ponerDigito('\\le');
    }, false);
    document.getElementById("men").addEventListener('mousedown', function() {
        ponerDigito('<');
    }, false);
    document.getElementById("may").addEventListener('mousedown', function() {
        ponerDigito('>');
    }, false);
    document.getElementById("mas").addEventListener('mousedown', function() {
        ponerDigito('+');
    }, false);
    document.getElementById("menos").addEventListener('mousedown', function() {
        ponerDigito('-');
    }, false);
    document.getElementById("igual").addEventListener('mousedown', function() {
        ponerDigito('=');
    }, false);
    document.getElementById("mas-men").addEventListener('mousedown', function() {
        ponerDigito('\\pm');
    }, false);
    document.getElementById("infinito").addEventListener('mousedown', function() {
        ponerDigito('\\infty');
    }, false);
    document.getElementById("div").addEventListener('mousedown', function() {
        ponerDigito('\\div');
    }, false);
    document.getElementById("mult").addEventListener('mousedown', function() {
        ponerDigito('\\times');
    }, false);
    document.getElementById("ast").addEventListener('mousedown', function() {
        ponerDigito('\\ast');
    }, false);
    document.getElementById("diag").addEventListener('mousedown', function() {
        ponerDigito('/');
    }, false);
    document.getElementById("neq").addEventListener('mousedown', function() {
        ponerDigito('\\neq');
    }, false);
    document.getElementById("prent-izq").addEventListener('mousedown', function() {
        ponerDigito('(');
    }, false);
    document.getElementById("prent-der").addEventListener('mousedown', function() {
        ponerDigito(')');
    }, false);
    document.getElementById("uno").addEventListener('mousedown', function() {
        ponerDigito('1');
    }, false);
    document.getElementById("dos").addEventListener('mousedown', function() {
        ponerDigito('2');
    }, false);
    document.getElementById("tres").addEventListener('mousedown', function() {
        ponerDigito('3');
    }, false);
    document.getElementById("cuatro").addEventListener('mousedown', function() {
        ponerDigito('4');
    }, false);
    document.getElementById("cinco").addEventListener('mousedown', function() {
        ponerDigito('5');
    }, false);
    document.getElementById("seis").addEventListener('mousedown', function() {
        ponerDigito('6');
    }, false);
    document.getElementById("siete").addEventListener('mousedown', function() {
        ponerDigito('7');
    }, false);
    document.getElementById("ocho").addEventListener('mousedown', function() {
        ponerDigito('8');
    }, false);
    document.getElementById("nueve").addEventListener('mousedown', function() {
        ponerDigito('9');
    }, false);
    document.getElementById("cero").addEventListener('mousedown', function() {
        ponerDigito('0');
    }, false);
    document.getElementById("ap").addEventListener('mousedown', function() {
        ponerDigito('\\alpha');
    }, false);
    document.getElementById("bet").addEventListener('mousedown', function() {
        ponerDigito('\\beta');
    }, false);
    document.getElementById("ga").addEventListener('mousedown', function() {
        ponerDigito('\\gamma');
    }, false);
    document.getElementById("del").addEventListener('mousedown', function() {
        ponerDigito('\\delta');
    }, false);
    document.getElementById("ep").addEventListener('mousedown', function() {
        ponerDigito('\\epsilon');
    }, false);
    document.getElementById("var").addEventListener('mousedown', function() {
        ponerDigito('\\varepsilon');
    }, false);
    document.getElementById("ze").addEventListener('mousedown', function() {
        ponerDigito('\\zeta');
    }, false);
    document.getElementById("et").addEventListener('mousedown', function() {
        ponerDigito('\\eta');
    }, false);
    document.getElementById("th").addEventListener('mousedown', function() {
        ponerDigito('\\theta');
    }, false);
    document.getElementById("vart").addEventListener('mousedown', function() {
        ponerDigito('\\vartheta');
    }, false);
    document.getElementById("iot").addEventListener('mousedown', function() {
        ponerDigito('\\iota');
    }, false);
    document.getElementById("kap").addEventListener('mousedown', function() {
        ponerDigito('\\kappa');
    }, false);
    document.getElementById("lam").addEventListener('mousedown', function() {
        ponerDigito('\\lambda');
    }, false);
    document.getElementById("mu").addEventListener('mousedown', function() {
        ponerDigito('\\mu');
    }, false);
    document.getElementById("nu").addEventListener('mousedown', function() {
        ponerDigito('\\nu');
    }, false);
    document.getElementById("xi").addEventListener('mousedown', function() {
        ponerDigito('\\xi');
    }, false);
    document.getElementById("o").addEventListener('mousedown', function() {
        ponerDigito('o');
    }, false);
    document.getElementById("pi").addEventListener('mousedown', function() {
        ponerDigito('\\pi');
    }, false);
    document.getElementById("varp").addEventListener('mousedown', function() {
        ponerDigito('\\varpi');
    }, false);
    document.getElementById("rho").addEventListener('mousedown', function() {
        ponerDigito('\\rho');
    }, false);
    document.getElementById("varho").addEventListener('mousedown', function() {
        ponerDigito('\\varrho');
    }, false);
    document.getElementById("sigma").addEventListener('mousedown', function() {
        ponerDigito('\\sigma');
    }, false);
    document.getElementById("varsig").addEventListener('mousedown', function() {
        ponerDigito('\\varsigma');
    }, false);
    document.getElementById("tau").addEventListener('mousedown', function() {
        ponerDigito('\\tau');
    }, false);
    document.getElementById("upsil").addEventListener('mousedown', function() {
        ponerDigito('\\upsilon');
    }, false);
    document.getElementById("phi").addEventListener('mousedown', function() {
        ponerDigito('\\phi');
    }, false);
    document.getElementById("chi").addEventListener('mousedown', function() {
        ponerDigito('\\chi');
    }, false);
    document.getElementById("psi").addEventListener('mousedown', function() {
        ponerDigito('\\psi');
    }, false);
    document.getElementById("omeg").addEventListener('mousedown', function() {
        ponerDigito('\\omega');
    }, false);
    document.getElementById("letera").addEventListener('mousedown', function() {
        ponerDigito('a');
    }, false);
    document.getElementById("leterb").addEventListener('mousedown', function() {
        ponerDigito('b');
    }, false);
    document.getElementById("leterc").addEventListener('mousedown', function() {
        ponerDigito('c');
    }, false);
    document.getElementById("leterd").addEventListener('mousedown', function() {
        ponerDigito('d');
    }, false);
    document.getElementById("letere").addEventListener('mousedown', function() {
        ponerDigito('e');
    }, false);
    document.getElementById("leterf").addEventListener('mousedown', function() {
        ponerDigito('f');
    }, false);
    document.getElementById("leterg").addEventListener('mousedown', function() {
        ponerDigito('g');
    }, false);
    document.getElementById("leterh").addEventListener('mousedown', function() {
        ponerDigito('h');
    }, false);
    document.getElementById("leteri").addEventListener('mousedown', function() {
        ponerDigito('i');
    }, false);
    document.getElementById("leterj").addEventListener('mousedown', function() {
        ponerDigito('j');
    }, false);
    document.getElementById("leterk").addEventListener('mousedown', function() {
        ponerDigito('k');
    }, false);
    document.getElementById("leterl").addEventListener('mousedown', function() {
        ponerDigito('l');
    }, false);
    document.getElementById("leterm").addEventListener('mousedown', function() {
        ponerDigito('m');
    }, false);
    document.getElementById("letern").addEventListener('mousedown', function() {
        ponerDigito('n');
    }, false);
    document.getElementById("letero").addEventListener('mousedown', function() {
        ponerDigito('o');
    }, false);
    document.getElementById("leterp").addEventListener('mousedown', function() {
        ponerDigito('p');
    }, false);
    document.getElementById("leterq").addEventListener('mousedown', function() {
        ponerDigito('q');
    }, false);
    document.getElementById("leterr").addEventListener('mousedown', function() {
        ponerDigito('r');
    }, false);
    document.getElementById("leters").addEventListener('mousedown', function() {
        ponerDigito('s');
    }, false);
    document.getElementById("letert").addEventListener('mousedown', function() {
        ponerDigito('t');
    }, false);
    document.getElementById("leteru").addEventListener('mousedown', function() {
        ponerDigito('u');
    }, false);
    document.getElementById("leterv").addEventListener('mousedown', function() {
        ponerDigito('v');
    }, false);
    document.getElementById("leterw").addEventListener('mousedown', function() {
        ponerDigito('w');
    }, false);
    document.getElementById("leterx").addEventListener('mousedown', function() {
        ponerDigito('x');
    }, false);
    document.getElementById("letery").addEventListener('mousedown', function() {
        ponerDigito('y');
    }, false);
    document.getElementById("leterz").addEventListener('mousedown', function() {
        ponerDigito('z');
    }, false);
    document.getElementById("CR").addEventListener('mousedown', function() {
        ponerDigito('\\\\');
    }, false);
    //document.getElementById("clc").addEventListener('mousedown', borrar, false);
}
function ponerDigito(digito) {
    var input = document.getElementById('EdtFormulas');
    if (typeof input.selectionStart != 'undefined')
    {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        var insText = input.value.substring(start, end);
        input.value = input.value.substr(0, start) + "" + digito + "" + input.value.substr(end);
        input.focus();
        input.setSelectionRange(start + 2 + digito.length + insText.length + 3 + digito.length, start + 2 + digito.length + insText.length + 3 + digito.length);
        return;
    }
}
/*	
 function Mayusculas(letra){
 letra.value=letra.value.toUpperCase();
 }*/