function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','fotos/hcrianca.png')
            } else if(idade < 25){
                img.setAttribute('src', 'fotos/hadolescente.png')
            } else if(idade < 60){
                img.setAttribute('src', 'fotos/hadulto.png')
            } else {
                img.setAttribute('src', 'fotos/hidoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'fotos/mcrianca.png')
            } else if(idade < 25){
                img.setAttribute('src', 'fotos/madolescente.png')
            } else if(idade < 60){
                img.setAttribute('src', 'fotos/madulta.png')
            } else {
                img.setAttribute('src', 'fotos/midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}