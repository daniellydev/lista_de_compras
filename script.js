const LISTA = [
  {
    nome: "Pão de forma",
    checked: true,
  },
  {
    nome: "Café preto",
    checked: false,
  },
  {
    nome: "Suco de laranja",
    checked: false,
  },
  {
    nome: "Biscoito",
    checked: false,
  },
];

const lista = document.querySelector("ul");

function criarLegenda({ value, checked }) {
  const legenda = document.createElement("label");
  const div = document.createElement("div");
  const inputCheckBox = document.createElement("input");
  const imagem = document.createElement("img");
  const span = document.createElement("span");

  div.classList.add("input-checkbox");
  inputCheckBox.type = "checkbox";
  inputCheckBox.checked = checked;
  imagem.src = "assets/icons/check.png";

  span.innerText = value;

  inputCheckBox.addEventListener("change", (event) => {
    const indentificarClique = LISTA.findIndex(({ nome }) => nome === value);

    if(indentificarClique !== -1) {
      LISTA[indentificarClique].checked = !LISTA[indentificarClique].checked 
    }

    console.log(LISTA)
  });

  div.appendChild(inputCheckBox);
  div.appendChild(imagem);

  legenda.appendChild(div);
  legenda.appendChild(span);

  return legenda;
}

function criarBotaoRemover() {
  const botao = document.createElement("button");
  const imagem = document.createElement("img");

  imagem.src = "assets/icons/lixeira.png";
  imagem.alt = "Remover item";

  botao.classList.add("btn-remover");
  botao.appendChild(imagem);

  return botao;
}

function criarItem(data) {
  const item = document.createElement("li");

  item.classList.add("list-item");

  const legenda = criarLegenda(data);
  const botaoremover = criarBotaoRemover();

  item.appendChild(legenda);
  item.appendChild(botaoremover);

  return item;
}

function redenrizarLista() {
  LISTA.forEach(({ nome, checked }) => {
    const item = criarItem({ value: nome, checked });

    lista.appendChild(item);
  });
}

redenrizarLista();

const formulario = document.querySelector("form");

function enviarFormulario(event) {
  event.preventDefault();

  const value = event.target[0].value;

  if (Boolean(value.trim())) {
    LISTA.push({
      nome: value,
      checked: false,
    });

    const item = criarItem({ value, checked: false });

    lista.appendChild(item);
  }
}

formulario.addEventListener("submit", enviarFormulario);
