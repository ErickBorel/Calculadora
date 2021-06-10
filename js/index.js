function insert(number) {
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + number;

}

function clean() {
    document.getElementById('visor').innerHTML = "";
    document.getElementById('visor2').innerHTML = "";
}

function back() {
    var visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length -1);
}

function calcular() {
    var visor = document.getElementById('visor').innerHTML;
    if(visor) {
        document.getElementById('visor2').innerHTML = eval(visor);
    } else {
        document.getElementById('visor2').innerHTML = "Erro";
    }
}