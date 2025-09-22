  const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com que frequência você utiliza cosméticos no seu dia a dia?",
        alternativas: [
            {
                texto: "Diariamente",
                afirmacao: "Isso indica que os cosméticos fazem parte da sua rotina de cuidados pessoais."
            },
            {
                texto: "Apenas em ocasiões especiais",
                afirmacao: "Você valoriza o uso pontual de cosméticos, priorizando naturalidade no dia a dia."
            }
        ]
    },
    {
        enunciado: "O que mais influencia sua escolha por um cosmético?",
            {
                texto: "O que mais influencia sua escolha por um cosmético?",
                afirmacao: "Você prioriza produtos que cuidam da saúde da sua pele a longo prazo."
            },
            {
                texto: "Preço acessível",
                afirmacao: "Você busca equilíbrio entre beleza e economia, preferindo opções mais em conta.",
            }
        ]
    },
    {
        enunciado: "Onde você costuma comprar seus cosméticos?",
        alternativas: [
            {
                texto: "Lojas físicas",
                afirmacao: "Você prefere experimentar os produtos antes de comprar e receber orientação direta."
            },
            {
                texto: "Lojas online",
                afirmacao: "Você valoriza praticidade e variedade na hora de escolher cosméticos."
        ]
    },
    {
        
        enunciado: "Que tipo de cosmético você usa com mais frequência?",
        alternativas: [
            {
                texto: "Produtos para a pele (hidratantes, protetores, etc.)",
                afirmacao: "Sua prioridade está no cuidado com a pele e prevenção de danos."
            },
            {
                texto: " Maquiagem (base, batom, máscara de cílios, etc.)",
                afirmacao: "Você gosta de destacar sua aparência com maquiagem no dia a dia ou em eventos."
            }
        ]
    },
    {
        enunciado: "O que mais pesa na sua decisão de continuar usando um cosmético?",
        alternativas: [
            {
                texto: "Resultados visíveis e satisfação pessoal",
                afirmacao: "Você valoriza produtos eficazes e que entregam o que prometem."
            },
            {
                texto: " Indicação de amigos, influenciadores ou profissionais",
                afirmacao: "Você confia na opinião de outras pessoas ao escolher e manter o uso de um cosmético."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();