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
        "1) Qual seu modelo de carro favorito",
        "2) Que características você mais valoriza em um carro?",
        "3) Se você pudesse ter qualquer carro do mundo, qual escolheria?",
        "4) Qual foi o melhor carro que você já dirigiu?",
        "5) O que mais chamou sua atenção em nossa loja?",
        "6) Que cor de carro você mais gosta e por quê?",
        "7) Você prefere carros automáticos ou manuais?",
        "8) O que é mais importante para você: desempenho, economia de combustível ou design?",
        "9) Você se considera mais apaixonado por carros clássicos ou modernos?",
        "10) Você daria prioridade a um carro elétrico hoje em dia? "
        

    ]
   
    let perguntas = 0;
    const respostas = [];

    function atualizarBarraProgresso() {
    const progresso = (perguntas / questoes.length) * 111;
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