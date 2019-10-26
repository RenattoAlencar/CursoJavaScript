var $velocidade = window.document.querySelector('input#txtVel')
var _resultado = window.document.getElementById('res')



//Converter o valor do input em Number


function verificar() {
    //Focar no .value - Esquecia duas Vezes(*)
    var velo = Number($velocidade.value)

    //Forma de Testar os Inputs
    //window.document.write(`${velo}`)
    if (velo < 10) {
        _resultado.style.background = 'blue'
        _resultado.style.color = 'Yellow'
        _resultado.innerHTML = `Voce está Abaixo do Limite de Velocidade ${velo}Km/h`
    } else if (velo < 61) {
        _resultado.style.background = 'green'
        _resultado.style.color = 'white'
        _resultado.innerHTML = `Voce está no Limite da Velocidade ${velo}Km/h tenha uma boa Viagem`
    }

    else {
        _resultado.style.background = 'red'
        _resultado.style.color = 'black'
        _resultado.innerHTML = `Você está Acima do Limite de Velocidade <strong> ${velo}Km/h </strong>`
    }


    //_resultado.innerHTML = `A velocida é de ${velo}`
}