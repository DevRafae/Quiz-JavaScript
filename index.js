const perguntas = [
    {
      pergunta: "O que é o operador de propagação ('spread operator') em JavaScript?",
      respostas: [
        "Um operador para concatenar strings",
        "Um operador para espalhar os elementos de um array em outro array",
        "Um operador para realizar operações matemáticas"
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
        "Com a função 'typeof'",
        "Apenas olhando para o valor da variável",
        "Usando uma condição 'if'"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma expressão arrow em JavaScript?",
      respostas: [
        "Uma forma compacta de escrever funções",
        "Um tipo de operador lógico",
        "Um tipo de objeto especial"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma, são equivalentes",
        "'==' compara valores e '===' compara valores e tipos",
        "'===' compara valores e '==' compara valores e tipos"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o método 'map()' em JavaScript?",
      respostas: [
        "Um método para criar uma nova matriz",
        "Um método para adicionar itens a uma matriz",
        "Um método para iterar sobre os elementos de uma matriz"
      ],
      correta: 0
    },
    {
      pergunta: "Como você adiciona um elemento ao final de um array em JavaScript?",
      respostas: [
        "Com o método 'push()'",
        "Com o método 'concat()'",
        "Com o método 'shift()'"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'escopo' em JavaScript?",
      respostas: [
        "O número total de linhas de código em um programa",
        "A área do código onde uma variável pode ser acessada",
        "A forma como as funções são definidas em JavaScript"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'filter()' em JavaScript?",
      respostas: [
        "Remover itens duplicados de uma matriz",
        "Criar uma nova matriz com elementos que atendam a uma condição específica",
        "Inverter a ordem dos elementos em uma matriz"
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'callback hell' em JavaScript?",
      respostas: [
        "Um método de programação assíncrona para evitar loops infinitos",
        "Uma prática recomendada para lidar com funções de retorno em JavaScript",
        "Uma situação em que múltiplas funções de retorno aninhadas tornam o código difícil de entender e manter"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'reduce()' em JavaScript?",
      respostas: [
        "Reduzir a precisão de um número",
        "Reduzir o tamanho de uma matriz",
        "Reduzir os elementos de uma matriz para um único valor"
      ],
      correta: 2
    }
  ];
  
    
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
    // loop ou laço de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value= item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
        corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
        quizItem.querySelector('dl').appendChild(dt)
      }
    
      
      quizItem.querySelector('dl dt').remove()
      
      
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }