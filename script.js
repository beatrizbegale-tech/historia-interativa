// ETAPA 1: Selecionando os elementos visuais da página HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// ETAPA 2: Criando a estrutura de dados com as perguntas e caminhos da história
const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ]
            }
        ]
    }
];

// ETAPA 3: Código para fazer a pergunta e alternativas aparecerem na tela
function mostraPergunta() {
    let perguntaAtual = perguntas[0];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
   
    // Limpa as alternativas anteriores antes de adicionar as novas
    caixaAlternativas.textContent = "";
   
    // Criando os botões na tela para cada alternativa
    perguntaAtual.alternativas.forEach((alternativa) => {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    });
}

// Executa a função para mostrar a pergunta assim que a página carrega
mostraPergunta();