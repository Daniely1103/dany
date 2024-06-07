const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent =  tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrsuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorALL('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[0].onclick = aumentaTamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha-1;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenhaa+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
for (i = 0;i < checkbox.length; ii++) {
    checkbox[i].onclick = geraSenha;
}

gerasenha();

function gerasenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + numeros;
    }
    

