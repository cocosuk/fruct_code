function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        // Проверяем текущее значение свойства "display"
        const currentDisplay = getComputedStyle(element).display;

        if (currentDisplay === "none") {
            element.style.display = "block";

            // Если это видео, начинаем воспроизведение
            if (element.tagName === "VIDEO") {
                element.play();
            }
        } else {
            element.style.display = "none";

            // Если это видео, останавливаем воспроизведение
            if (element.tagName === "VIDEO") {
                element.pause();
            }
        }
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}



function updateH1WithUTMTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1 = document.querySelector("h1");
    if (h1) {
        h1.textContent = utmTerm || h1.textContent;
    }
}

function logCurrentTime() {
    const now = new Date();
    const formattedTime = now.toTimeString().split(" ")[0]; // "ЧЧ:ММ:СС"
    console.log(`Текущее время: ${formattedTime}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Вызываем showMessage и logCurrentTime сразу
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    // Сбрасываем цвет фона
    resetBackgroundColor();
    // Меняем цвет фона
    changeBackgroundColor("lightblue");
    // Переключаем видимость элемента с классом .content
    toggleVisibility('.Main_page.centered.content');
    // Обновляем текст H1 с учетом параметра utm_term
    updateH1WithUTMTerm();
});
