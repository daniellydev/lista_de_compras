const LISTA = [
  {
    nome: "Pão de forma",
    checked: false,
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


const formulario = document.querySelector('form')

function enviarFormulario(event){
    event.preventDefault()

    const value = event.target[0].value


    if(Boolean(value.trim())){
        LISTA.push({
            nome: value,
            checked: false
        })
    }

    
}

formulario.addEventListener('submit', enviarFormulario)