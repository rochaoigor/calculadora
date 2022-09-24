valor = '';
function calcSete() {
    valor = valor + calc.isete.value
    calc.visor.value  = valor;
}function calcOito() {
    valor = valor + calc.ioito.value
    calc.visor.value = valor;
}function calcNove() {
    valor = valor + calc.inove.value
    calc.visor.value = valor;
}function calcQuatro() {
    valor = valor + calc.iquatro.value
    calc.visor.value = valor;
}function calcCinco() {
    valor = valor + calc.icinco.value
    calc.visor.value=valor;
}function calcSeis() {
    valor = valor + calc.iseis.value
    calc.visor.value=valor;
}function calcUm () {
    valor = valor + calc.ium.value
    calc.visor.value=valor;
}function calcDois() {
    valor = valor + calc.idois.value
    calc.visor.value=valor;
}function calcTres() {
    valor = valor + calc.itres.value
    calc.visor.value=valor;
}function calcZero () {
    valor = valor + calc.izero.value
    calc.visor.value=valor;
}function calcDiv () {
    valor1 = valor;
    oper = 1
    valor = '';
}function calcSoma() {
    valor1 = valor;
    oper = 2
    valor = '';
}function calcMulti () {
    valor1 = valor;
    oper = 3
    valor = '';
}function calcSub() {
    valor1 = valor;
    oper = 4
    valor = '';
}function calcCe () {
    calc.visor.value = '';
    valor = '';
}
function calcigual() {
    valor2 = valor;
    if (oper == 1) {
    resultado = parseFloat(valor1) / parseFloat (valor2)
    calc.visor.value = resultado;
}
else if (oper == 2) {
    resultado = parseFloat(valor1) + parseFloat(valor2)
    calc.visor.value = resultado;
}else if (oper == 3) {
    resultado = parseFloat(valor1) * parseFloat(valor2)
    calc.visor.value = resultado;
}else if (oper == 4) {
    resultado = parseFloat(valor1) - parseFloat(valor2)
    calc.visor.value = resultado;
}
valor = resultado;

}

