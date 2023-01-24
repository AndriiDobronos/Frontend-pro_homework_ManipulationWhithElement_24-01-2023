"use strict";
/*
1) створити найпростішу html сторінку

2) підключити файл зі скриптом

3) у скрипті зробити наступне:

    створити div
додати йому клас main
пофарбувати його жовтим
додати його у body
запитати у користувача колір фону,
 запропонувавши вибрати з 3 варіантів (варіанти придумуємо самі)

пофарбувати дів у вибраний колір. якщо колір не вибрано, то прибрати фон
запитати у користувача, чи додавати тінь
якщо користувач погодився, додати тінь для div
запитати у користувача текстове наповнення
додати введений текст всередину div

/*********************************************************/
/*
Критерії перевірки:

    - Всі умови задачі виконані (програма робить те, що треба)

- Немає помилок у консолі

- Зроблена валідація і враховані всі варіанти вхідних даних

- Використовуються тільки строгі рівності

- Використовуються const скрізь, де треба     */
/*
function createDiv() {
    const div = document.createElement("div")
    div.style.display = "block"
    div.style.width = "300px"
    div.style.height =  "200px"
    div.style.border = "2px solid black"
    div.classList.add("main")
    div.style.background = "yellow"
    document.body.append(div)
    div.style.textAlign = "center"
    return document
}
createDiv()
*/
const div = document.createElement("div")
div.style.display = "block"
div.style.width = "300px"
div.style.height =  "200px"
div.style.border = "2px solid black"
div.classList.add("main")
div.style.background = "yellow"
document.body.append(div)
div.style.textAlign = "center"

function coloredDiv() {
    let userInput
    do {
        const message = userInput === undefined ?
            `Selected color for div: green, grey, red` :
            `Color for div is invalid, repeat place \n
            Selected color for div: green, grey, red`
        userInput = prompt(message)
        if (userInput === null || userInput === "") {
           return div.style.background = "transparent"
        }
    }
    while (userInput !== "red" && userInput !== "green" && userInput !== "grey")
    return div.style.background = `${userInput}`
}
coloredDiv()

function addShadow() {
    const selectShadow = prompt(`Do you want to add a shadow ?`)?.toLowerCase()
    if (selectShadow === undefined || selectShadow === "no" ||
        selectShadow === "not") {
        alert(`Your div without a shadow`)
        return
    }
    div.style.boxShadow = `10px 5px 5px grey`
}
addShadow()

function addText() {
    const inputText = prompt(`Input text for div`)
    if (inputText === null || inputText === "") {
        alert(`Your div is empty`)
        return
    }
    div.innerHTML = `<p> ${inputText}</p>`
}
addText()