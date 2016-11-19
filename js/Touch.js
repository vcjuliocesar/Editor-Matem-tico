/* 
 Created on : 20-ene-2014, 19:21:54
 Author     : Julio Cesar Valadez Castañeda
 */
window.addEventListener("load", function(evt) {
    Run();
}, false);

function Run() {
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);

    document.getElementById("frac").addEventListener('touchstart', function() {
        ponerDigito('\\frac{x}{y}');
    }, false);

    document.getElementById("raiz").addEventListener('touchstart', function() {
        ponerDigito('\\sqrt{x}');
    }, false);
    document.getElementById("fx").addEventListener('touchstart', function() {
        ponerDigito('f(x)=');
    }, false);
    document.getElementById("expon").addEventListener('touchstart', function() {
        ponerDigito('{x}^{y}');
    }, false);
    document.getElementById("inte").addEventListener('touchstart', function() {
        ponerDigito('\\int{}');
    }, false);
    document.getElementById("may_iql").addEventListener('touchstart', function() {
        ponerDigito('\\ge');
    }, false);
    document.getElementById("men_iql").addEventListener('touchstart', function() {
        ponerDigito('\\le');
    }, false);
    document.getElementById("men").addEventListener('touchstart', function() {
        ponerDigito('<');
    }, false);
    document.getElementById("may").addEventListener('touchstart', function() {
        ponerDigito('>');
    }, false);
    document.getElementById("mas").addEventListener('touchstart', function() {
        ponerDigito('+');
    }, false);
    document.getElementById("menos").addEventListener('touchstart', function() {
        ponerDigito('-');
    }, false);
    document.getElementById("igual").addEventListener('touchstart', function() {
        ponerDigito('=');
    }, false);
    document.getElementById("mas-men").addEventListener('touchstart', function() {
        ponerDigito('\\pm');
    }, false);
    document.getElementById("infinito").addEventListener('touchstart', function() {
        ponerDigito('\\infty');
    }, false);
    document.getElementById("div").addEventListener('touchstart', function() {
        ponerDigito('\\div');
    }, false);
    document.getElementById("mult").addEventListener('touchstart', function() {
        ponerDigito('\\times');
    }, false);
    document.getElementById("ast").addEventListener('touchstart', function() {
        ponerDigito('\\ast');
    }, false);
    document.getElementById("diag").addEventListener('touchstart', function() {
        ponerDigito('/');
    }, false);
    document.getElementById("neq").addEventListener('touchstart', function() {
        ponerDigito('\\neq');
    }, false);
    document.getElementById("prent-izq").addEventListener('touchstart', function() {
        ponerDigito('(');
    }, false);
    document.getElementById("prent-der").addEventListener('touchstart', function() {
        ponerDigito(')');
    }, false);
    document.getElementById("uno").addEventListener('touchstart', function() {
        ponerDigito('1');
    }, false);
    document.getElementById("dos").addEventListener('touchstart', function() {
        ponerDigito('2');
    }, false);
    document.getElementById("tres").addEventListener('touchstart', function() {
        ponerDigito('3');
    }, false);
    document.getElementById("cuatro").addEventListener('touchstart', function() {
        ponerDigito('4');
    }, false);
    document.getElementById("cinco").addEventListener('touchstart', function() {
        ponerDigito('5');
    }, false);
    document.getElementById("seis").addEventListener('touchstart', function() {
        ponerDigito('6');
    }, false);
    document.getElementById("siete").addEventListener('touchstart', function() {
        ponerDigito('7');
    }, false);
    document.getElementById("ocho").addEventListener('touchstart', function() {
        ponerDigito('8');
    }, false);
    document.getElementById("nueve").addEventListener('touchstart', function() {
        ponerDigito('9');
    }, false);
    document.getElementById("cero").addEventListener('touchstart', function() {
        ponerDigito('0');
    }, false);
    document.getElementById("ap").addEventListener('touchstart', function() {
        ponerDigito('\\alpha');
    }, false);
    document.getElementById("bet").addEventListener('touchstart', function() {
        ponerDigito('\\beta');
    }, false);
    document.getElementById("ga").addEventListener('touchstart', function() {
        ponerDigito('\\gamma');
    }, false);
    document.getElementById("del").addEventListener('touchstart', function() {
        ponerDigito('\\delta');
    }, false);
    document.getElementById("ep").addEventListener('touchstart', function() {
        ponerDigito('\\epsilon');
    }, false);
    document.getElementById("var").addEventListener('touchstart', function() {
        ponerDigito('\\varepsilon');
    }, false);
    document.getElementById("ze").addEventListener('touchstart', function() {
        ponerDigito('\\zeta');
    }, false);
    document.getElementById("et").addEventListener('touchstart', function() {
        ponerDigito('\\eta');
    }, false);
    document.getElementById("th").addEventListener('touchstart', function() {
        ponerDigito('\\theta');
    }, false);
    document.getElementById("vart").addEventListener('touchstart', function() {
        ponerDigito('\\vartheta');
    }, false);
    document.getElementById("iot").addEventListener('touchstart', function() {
        ponerDigito('\\iota');
    }, false);
    document.getElementById("kap").addEventListener('touchstart', function() {
        ponerDigito('\\kappa');
    }, false);
    document.getElementById("lam").addEventListener('touchstart', function() {
        ponerDigito('\\lambda');
    }, false);
    document.getElementById("mu").addEventListener('touchstart', function() {
        ponerDigito('\\mu');
    }, false);
    document.getElementById("nu").addEventListener('touchstart', function() {
        ponerDigito('\\nu');
    }, false);
    document.getElementById("xi").addEventListener('touchstart', function() {
        ponerDigito('\\xi');
    }, false);
    document.getElementById("o").addEventListener('touchstart', function() {
        ponerDigito('o');
    }, false);
    document.getElementById("pi").addEventListener('touchstart', function() {
        ponerDigito('\\pi');
    }, false);
    document.getElementById("varp").addEventListener('touchstart', function() {
        ponerDigito('\\varpi');
    }, false);
    document.getElementById("rho").addEventListener('touchstart', function() {
        ponerDigito('\\rho');
    }, false);
    document.getElementById("varho").addEventListener('touchstart', function() {
        ponerDigito('\\varrho');
    }, false);
    document.getElementById("sigma").addEventListener('touchstart', function() {
        ponerDigito('\\sigma');
    }, false);
    document.getElementById("varsig").addEventListener('touchstart', function() {
        ponerDigito('\\varsigma');
    }, false);
    document.getElementById("tau").addEventListener('touchstart', function() {
        ponerDigito('\\tau');
    }, false);
    document.getElementById("upsil").addEventListener('touchstart', function() {
        ponerDigito('\\upsilon');
    }, false);
    document.getElementById("phi").addEventListener('touchstart', function() {
        ponerDigito('\\phi');
    }, false);
    document.getElementById("chi").addEventListener('touchstart', function() {
        ponerDigito('\\chi');
    }, false);
    document.getElementById("psi").addEventListener('touchstart', function() {
        ponerDigito('\\psi');
    }, false);
    document.getElementById("omeg").addEventListener('touchstart', function() {
        ponerDigito('\\omega');
    }, false);
    document.getElementById("letera").addEventListener('touchstart', function() {
        ponerDigito('a');
    }, false);
     document.getElementById("leterb").addEventListener('touchstart', function() {
        ponerDigito('b');
    }, false);
     document.getElementById("leterc").addEventListener('touchstart', function() {
        ponerDigito('c');
    }, false);
     document.getElementById("leterd").addEventListener('touchstart', function() {
        ponerDigito('d');
    }, false);
     document.getElementById("letere").addEventListener('touchstart', function() {
        ponerDigito('e');
    }, false);
     document.getElementById("leterf").addEventListener('touchstart', function() {
        ponerDigito('f');
    }, false);
    document.getElementById("leterg").addEventListener('touchstart', function() {
        ponerDigito('g');
    }, false);
     document.getElementById("leterh").addEventListener('touchstart', function() {
        ponerDigito('h');
    }, false);
     document.getElementById("leteri").addEventListener('touchstart', function() {
        ponerDigito('i');
    }, false);
     document.getElementById("leterj").addEventListener('touchstart', function() {
        ponerDigito('j');
    }, false);
     document.getElementById("leterk").addEventListener('touchstart', function() {
        ponerDigito('k');
    }, false);
     document.getElementById("leterl").addEventListener('touchstart', function() {
        ponerDigito('l');
    }, false);
    document.getElementById("leterm").addEventListener('touchstart', function() {
        ponerDigito('m');
    }, false);
     document.getElementById("letern").addEventListener('touchstart', function() {
        ponerDigito('n');
    }, false);
     document.getElementById("letero").addEventListener('touchstart', function() {
        ponerDigito('o');
    }, false);
     document.getElementById("leterp").addEventListener('touchstart', function() {
        ponerDigito('p');
    }, false);
     document.getElementById("leterq").addEventListener('touchstart', function() {
        ponerDigito('q');
    }, false);
     document.getElementById("leterr").addEventListener('touchstart', function() {
        ponerDigito('r');
    }, false);
    document.getElementById("leters").addEventListener('touchstart', function() {
        ponerDigito('s');
    }, false);
     document.getElementById("letert").addEventListener('touchstart', function() {
        ponerDigito('t');
    }, false);
     document.getElementById("leteru").addEventListener('touchstart', function() {
        ponerDigito('u');
    }, false);
     document.getElementById("leterv").addEventListener('touchstart', function() {
        ponerDigito('v');
    }, false);
     document.getElementById("leterw").addEventListener('touchstart', function() {
        ponerDigito('w');
    }, false);
     document.getElementById("leterx").addEventListener('touchstart', function() {
        ponerDigito('x');
    }, false);
      document.getElementById("letery").addEventListener('touchstart', function() {
        ponerDigito('y');
    }, false);
     document.getElementById("leterz").addEventListener('touchstart', function() {
        ponerDigito('z');
    }, false);
    document.getElementById("CR").addEventListener('touchstart', function() {
        ponerDigito('\\\\');
    }, false);
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
