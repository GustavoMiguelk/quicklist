// Obtendo os Elementos da Página
const items = document.querySelector("ul")
const newItem = document.getElementById("item")
const form = document.querySelector("form")

// Resgatando o item a ser adicionado
form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Regex para permitir letras, números e espaços, com limite de 1 a 20 caracteres
    const toLimit = /^[\p{L}0-9 ]{1,25}$/u

    // Verificando se os inputs contêm algo e se correspondem à regex
    if (newItem.value.trim() === "" || !toLimit.test(newItem.value.trim())) {
        alert("Erro! Insira um valor válido (apenas letras, números e espaços, máximo 25 caracteres).")
        return
    }

    // Criando os novos Elementos
    const newListItem = document.createElement("li")
    const checkItem = document.createElement("input")

    // Definindo o Tipo do Input
    checkItem.type = "checkbox"

    // Juntando os Elementos
    newListItem.append(checkItem, newItem.value.trim())
    items.prepend(newListItem);

    // Redefinindo o valor do Input
    newItem.value = ""
});