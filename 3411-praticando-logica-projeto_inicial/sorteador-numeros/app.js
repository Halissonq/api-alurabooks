function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if( quantidade > ate - de + 1){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    
    let numerosSorteados = [];
    let numero;


    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(numerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }  
        numerosSorteados.push(numero);
    }

    let numerosSorteadosString = numerosSorteados.join(', ');
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo"> Números sorteados:  ${numerosSorteadosString}</label> `;
    
    
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function reiniciar(){
    document.getElementById('quantidade').value =' ';
    document.getElementById('de').value = ' ';
    document.getElementById('ate').value = ' ';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo"> Números sorteados:  nenhum até agora</label> `;
}

//halisson