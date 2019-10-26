function carregar() {
    var _msg = window.document.getElementById('msg')
    var _img = window.document.getElementById('imagem')
    var _fundoFoto = window.document.getElementById('foto')
    var _hora = new Date()

    var _horaAtual = _hora.getHours() 

    //var _horaAtual = 14 - Teste

    _msg.innerHTML = `Agora são ${_horaAtual}Horas `

    if(_horaAtual >=0 && _horaAtual<= 12){
        _img.src = 'manha.png'
        _msg.innerHTML+= 'Bom Dia!'
        document.body.style.background = '#44a2d8'       
    }else if (_horaAtual <= 18){
        _img.src = 'tarde.png'
        _msg.innerHTML+= 'Boa Tarde!'
        document.body.style.background = '#fd7201'
    }else{
        _img.src = 'noite.png'
        _msg.innerHTML+= 'Boa Noite!'
        document.body.style.background = '#123036'
    }

}



