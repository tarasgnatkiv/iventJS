// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

// let textInput = `Очікую на ввід даних`;

// let containerTask1 = document.getElementById(`task1`);
// let spanText = document.createElement(`span`);
// spanText.innerText = `${textInput}`;
// containerTask1.appendChild(spanText);

// document.addEventListener(`keydown`, function(event) {
//     if (event.code === `KeyA` && event.altKey && spanText.tagName === `SPAN`) {
//                 spanText.remove();
//                 spanText = document.createElement(`input`);
//                 spanText.setAttribute(`placeholder`, `${textInput}`);
//                 containerTask1.appendChild(spanText);
//     }
// });

// document.addEventListener(`keydown`, function(event) {
//     if (event.code === `KeyS` && event.shiftKey && spanText.tagName === `INPUT`) {
//         textInput = spanText.value;
//         if (textInput === ``) {
//             textInput = `Ви нічого не ввели!!!`;
//         }
//         spanText.remove();
//         spanText = document.createElement(`span`);
//         spanText.innerText = `${textInput}`;
//         containerTask1.appendChild(spanText);
//     }
// });


// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.

// window.addEventListener(`resize`, () => {
//     if(innerWidth < 600) {
//         console.log(`Ми використовуємо Mobile версію`)
//     } else {
//         console.log(`Ми використовуємо Desktop версію`)
//     }
// });

// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

// let inputDiv = document.getElementById(`task3`);
// let inputTag = document.createElement(`input`);
// inputDiv.appendChild(inputTag);


// inputTag.onblur = function (e) {
//     alert(e.target.value);
// }


// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

// let modalContainer = document.getElementById(`task4`);
// let modal = document.createElement(`div`);
// modal.innerText = `Some model Window`;
// modal.classList.add(`modal`);
// modalContainer.appendChild(modal);

// document.addEventListener(`keydown`, function(event) {
//     if (event.code === `KeyO` && event.altKey) {
//         modal.classList.add(`block`);
//     }

//     if(event.code === `KeyC` && event.altKey) {
//         modal.classList.remove(`block`);
//     }
// });

// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.


let btn = document.getElementById(`btn`);
btn.onclick = (e) => {
    btn.setAttribute(`disabled`, `true`);


    let containerTask5 = document.getElementById(`task5`);
    let modalDiv = document.createElement(`div`);
    modalDiv.classList.add(`modalDiv`)



    let modalButoon = document.createElement(`button`);
    modalButoon.classList.add(`modalButoon2`);
    modalButoon.innerText = `Close`;

    modalButoon.onclick = (e) => {
        modalDiv.remove();
        btn.removeAttribute(`disabled`)
    }

    let textP = document.createElement(`p`);
    textP.classList.add(`textP`);
    textP.innerText = `Some important text to user about modal name`;


    modalDiv.appendChild(modalButoon);
    modalDiv.appendChild(textP);
    containerTask5.appendChild(modalDiv);

}






