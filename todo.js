const form = document.createElement("form")
document.body.appendChild(form)

const input = document.createElement("input")
input.placeholder = "TO DO"
form.appendChild(input)

const button = document.createElement("button")
button.innerText = "ADD"
button.role = 'submit'
form.appendChild(button)

const ul = document.createElement("ul")
document.body.appendChild(ul)

const removeElement = el => {
    el.remove()
}

form.onsubmit = (e)=> {
    e.preventDefault()
    const li = document.createElement("li")
    ul.appendChild(li)
    li.innerText = input.value
    li.onclick = removeElement.bind(null, li)
    input.value = ""
}








