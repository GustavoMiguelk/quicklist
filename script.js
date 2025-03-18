// Obtendo os Elementos da Página
const items = document.querySelector("ul")
const newItem = document.getElementById("item")
const form = document.querySelector("form")

// Resgatando o item a ser adicionado
form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Criando os novos Elementos
    const newListItem = document.createElement("li")
    const checkItem = document.createElement("input")

    // Definindo o Tipo do Input
    checkItem.type= "checkbox"

    // Juntando os Elementos
    newListItem.append(checkItem, newItem.value)
    items.prepend(newListItem)

    newItem.value = ""

})