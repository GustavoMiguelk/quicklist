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
    const itemWrap = document.createElement("div")
    const deleteItem = document.createElement("img")

    // Adicionando a Imagem ao botão.
    deleteItem.src = "./assets/trash.svg"

    // Adicionando a classe a imagem.
    deleteItem.classList.add("delete")

    // Definindo o Tipo do Input
    checkItem.type = "checkbox"

    itemWrap.append(checkItem, newItem.value.trim())

    // Juntando os Elementos
    newListItem.append(itemWrap, deleteItem)
    items.prepend(newListItem);

    // Redefinindo o valor do Input
    newItem.value = ""
});

// Exclui o item selecionado
items.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
        event.target.closest("li").remove()
    }
})

