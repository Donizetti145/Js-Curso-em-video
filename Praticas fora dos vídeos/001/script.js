function calcular() {
    var n1 = Number.document.getElementById('nota1')
    var n2 = Number.document.getElementById('nota2')
    var n3 = Number.document.getElementById('nota3')
    var n4 = Number.document.getElementById('nota4')
    var res = document.getElementById('res')
    var nota1 = n1
    var nota2 = n2
    var nota3 = n3
    var nota4 = n4
    var media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media <= 5) {
        res.innerHTML = `Sua média foi de ${media}, e você foi reprovado`
    } else {
        res.innerHTML = `Sua média foi de ${media}, e você foi aprovado`
    }

}