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
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = math.radom() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha= senha + alfabeto[numeroAleatorio];
    }
    campoSenha.valeue = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.logg(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
    if(entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35){
        forcaSenha.classList.add ('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "um computador pode levar ate" + Math.floor(2**entropia/(100e60*60*24)) + "dias p"
}
    

