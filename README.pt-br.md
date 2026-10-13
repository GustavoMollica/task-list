🇧🇷 Português | 🇺🇸 [English](README.md)

# Lista de Tarefas

Uma lista de tarefas simples feita com HTML, CSS e JavaScript puro. As tarefas ficam salvas no navegador, então continuam lá depois de recarregar a página.

## Visão Geral

O app permite adicionar e remover tarefas por meio de um formulário. A lista é guardada no `localStorage` e renderizada novamente quando a página carrega.

## Funcionalidades

- Adicionar tarefas por um formulário
- Remover tarefas com um botão em cada item
- Validação de tarefa vazia, incluindo campo só com espaços
- Tarefas persistidas no `localStorage`
- Acessibilidade básica: campo com label, mensagem de erro anunciada por leitores de tela, `aria-label` descritivo em cada botão de remover e foco visível no teclado
- Layout responsivo, adaptado para telas menores

## Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS)
- JavaScript (Vanilla JS, sem frameworks)

## Como Funciona

- A função `main()` em `assets/js/main.js` busca os elementos do DOM, registra os eventos e carrega as tarefas salvas.
- No envio do formulário, o texto passa por `trim()` e é validado. Se for válido, a tarefa é renderizada e a lista é salva.
- Clicar no botão de remover apaga o item e salva a lista novamente.
- A lista fica no `localStorage` com a chave `tasks`, como um array de strings.

## Estrutura do Projeto

```
TaskList/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Como Executar

Não é necessário instalar dependências. Abra o arquivo `index.html` no navegador (ou use a extensão **Live Server** do VS Code).

## Melhorias Futuras

- [ ] Tratar erros do `localStorage` com `try/catch` (dados corrompidos, armazenamento cheio)
- [ ] Manter as tarefas em um array de estado com `id` por tarefa, em vez de ler o DOM
- [ ] Marcar tarefas como concluídas e editá-las
- [ ] Dividir o código em módulos
- [ ] Adicionar testes automatizados

## Autor

Gustavo Mollica
Desenvolvedor Fullstack (.NET/C# no back-end)
