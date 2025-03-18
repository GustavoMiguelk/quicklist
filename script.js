// Obtendo os Elementos da Página
const items = document.querySelector("ul")
const newItem = document.getElementById("item")
const form = document.querySelector("form")

    // Resgatando o item a ser adicionado
    form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Verificando se os inputs contém algo
    if(newItem.value.trim() === ""){
        alert("Erro! Insira um valor válido.")
        return
    }

    // Criando os novos Elementos
    const newListItem = document.createElement("li")
    const checkItem = document.createElement("input")

    // Definindo o Tipo do Input
    checkItem.type= "checkbox"

    // Juntando os Elementos
    newListItem.append(checkItem, newItem.value)
    items.prepend(newListItem)

    // Redefinindo o valor do Input
    newItem.value = ""
})