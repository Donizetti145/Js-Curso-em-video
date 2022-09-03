function resultado() {
    var idade1 = document.getElementById('idade')
    var res = document.getElementById('res')
    var idade = Number(idade1.value)
    if (idade < 16) {
        res.innerHTML = ` Sua idade é ${idade}, ou seja, você não pode votar`
    } else if (idade < 18 || idade > 65) {
        res.innerHTML = `Voto opcional`
    } else {
        res.innerHTML = `Você tem ${idade}, ou seja, o seu voto é obrigatório`
    }
}