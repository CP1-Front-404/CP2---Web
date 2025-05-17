document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')
    const barraProgresso = document.getElementById('barra-progresso');

   
    const questoes=[
        "qual seu modelo de carro favorito",
        "Que características você mais valoriza em um carro?",
        "Se você pudesse ter qualquer carro do mundo, qual escolheria?",
        "Qual foi o melhor carro que você já dirigiu?",
        "O que mais chamou sua atenção em nossa loja?",
        "Que cor de carro você mais gosta e por quê?",
        "Você prefere carros automáticos ou manuais? Explique sua escolha",
    ]
   
    let perguntas = 0;
    const respostas = [];

    function atualizarBarraProgresso() {
    const progresso = (perguntas / questoes.length) * 100;
    barraProgresso.style.width = `${progresso}%`;
}
function mostrarPergunta(){
    if(perguntas < questoes.length){
        pergunta.textContent = questoes[perguntas];
        resposta.value = '';
        mensagem.textContent = '';
        atualizarBarraProgresso();
    }else{
        mostrarResultado();
    }
}
     function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
     }

     function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

     }
     function reiniciarQuiz(){
        atualizarBarraProgresso();
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
     }

     proximaPergunta.addEventListener('click',nextQuestao);
     reiniciarBotao.addEventListener('click',reiniciarQuiz);

     mostrarPergunta();

})