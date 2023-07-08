// range number
var $range = document.querySelector('#range'), $value = document.querySelector('#numero-salario');

$range.addEventListener('input', function() {
    $value.textContent = this.value;
})

// filtro 

// var tempoArray = document.getElementsByName('tempo')
// var opcaoSelecionada = ''

// for (let i = 0; i < tempoArray.length; i++) {
//     if (tempoArray[i].checked) {
//         opcaoSelecionada = tempoArray[1].value
//     }
// }

function addClass(element, name) {
    var classElement, classAdd;

    classElement = element.className.split(' ')
    classAdd = name.split(' ')
    for (let i = 0; i < classAdd.length; i++) {
        if (classElement.indexOf(classAdd[i]) == -1) {
            element.className += ' ' + classAdd[i]
        }
    }
}

function removeHideClass(element) {
    var classElement = element.className.split(' ')
    while (classElement.indexOf('hide') > -1) {
        classElement.splice(classElement.indexOf('hide'), 1)
    }
    element.className = classElement.join(' ')
}

var salarioUm = document.getElementById('salario-um')
var salarioDois = document.getElementById('salario-dois')
var salarioTres = document.getElementById('salario-tres')
var salarioQuatro = document.getElementById('salario-quatro')

var arraySalario = [document.getElementById('salario-um'), document.getElementById('salario-dois'), document.getElementById('salario-tres'), document.getElementById('salario-quatro')]

function filterUnidade(element, salario, localizacao) {    
    removeHideClass(document.getElementById(element))

    var salarioFilter = document.getElementById('range').value 
    var localizacaoFilter = document.getElementById('localizacao').value

    if (parseInt(document.getElementById(salario).innerText) < salarioFilter || document.getElementById(localizacao).innerText != localizacaoFilter) {
        addClass(document.getElementById(element), 'hide')
    }
}

function filter() {
    filterUnidade('vaga-um', 'salario-um', 'localizacao-um')
    filterUnidade('vaga-dois', 'salario-dois', 'localizacao-dois')
    filterUnidade('vaga-tres', 'salario-tres', 'localizacao-tres')
    filterUnidade('vaga-quatro', 'salario-quatro', 'localizacao-quatro')
}