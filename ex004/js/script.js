var nome = window.prompt('Qual é os seu nome?: ');
document.write(`Seu nome tem ${nome.length} letras.<br/>`);
document.write(`Olá, ${nome}! seu nome tem ${nome.length} letras <br/>`)
document.write(`O seu nome em maiusculo é assim ${nome.toUpperCase()}<br/>`)
document.write(`Seu nome em minúsculo é assim ${nome.toLowerCase()}`)

/*.length - mostra o tanto de caractéres tem a string
.toUpperCase() - deixa a string em maiúsculo
.toLowerCase() - deixa a string em minúsculo
*/