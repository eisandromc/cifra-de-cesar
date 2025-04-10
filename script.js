function cesarCifrar(mensagem, cifra) {
    let resultado = "";
    let cifraNumerica = parseInt(cifra);
    if (typeof mensagem === 'string' && typeof cifraNumerica === 'number' && !isNaN(cifraNumerica)) {
        for (let i = 0; i < mensagem.length; i++) {
            let char = mensagem[i];
            if (char.match(/[a-z]/i)) {
                let codigo = mensagem.charCodeAt(i);
                if (char >= 'A' && char <= 'Z') {
                    char = String.fromCharCode(((codigo - 65 + cifraNumerica) % 26) + 65);
                } else if (char >= 'a' && char <= 'z') {
                    char = String.fromCharCode(((codigo - 97 + cifraNumerica) % 26) + 97);
                }
            }
            resultado += char;
        }
        return resultado; // Agora está no lugar certo
    } else {
        return "Erro: Mensagem ou cifra inválida.";
    }
}


function cesarDecifrar(mensagem, cifra) {
    let resultado = "";
    let cifraNumerica = parseInt(cifra);
    if (typeof mensagem === 'string' && typeof cifraNumerica === 'number' && !isNaN(cifraNumerica)) {
        for (let i = 0; i < mensagem.length; i++) {
            let char = mensagem[i];
            if (char.match(/[a-z]/i)) {
                let codigo = mensagem.charCodeAt(i);
                if (char >= 'A' && char <= 'Z') {
                    char = String.fromCharCode(((codigo - 65 - cifraNumerica + 26) % 26) + 65);
                } else if (char >= 'a' && char <= 'z') {
                    char = String.fromCharCode(((codigo - 97 - cifraNumerica + 26) % 26) + 97);
                }
            }
            resultado += char;
        }
        return resultado;
    } else {
        return "Erro: Mensagem ou cifra inválida.";
    }
}

 
const btnCriptografar = document.getElementById("btnCriptografar");
btnCriptografar.addEventListener("click", function() {
    // 
    const mensagem = document.getElementById("txaMensagem").value;
    const cifgragem = document.getElementById("txtCifragem").value;
    //
    let mensagemCifrada = cesarCifrar(mensagem, cifgragem); 
    document.getElementById("resultado").innerHTML = mensagemCifrada;
    
});

const btnDescriptografar = document.getElementById("btnDescriptografar");
btnDescriptografar.addEventListener("click", function() {
    // 
    const mensagem = document.getElementById("txaMensagem").value;
    const cifgragem = document.getElementById("txtCifragem").value;
    //
    let mensagemCifrada = cesarDecifrar(mensagem, cifgragem); 
    document.getElementById("resultado").innerHTML = mensagemCifrada;
    
});

const btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", function() {
    
    document.getElementById("txaMensagem").value = '';
    document.getElementById("txtCifragem").value = '';
    document.getElementById("resultado").innerHTML = '';
    
});