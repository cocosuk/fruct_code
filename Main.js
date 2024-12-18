console.log("Скрипт подключён и работает!");

document.addEventListener("DOMContentLoaded", () => {

    const welcomeHeader = document.getElementById("Welcome");
    const avatarImage = document.querySelector(".avatar");

    if (welcomeHeader) {
        welcomeHeader.addEventListener("click", (event) => {
            if (event.target === welcomeHeader) {
                alert("Вы кликнули на заголовок - так держать!");
                console.log("Заголовок: ", welcomeHeader)
            }
        });
    } else {
        console.error("Заголовок не найден!");
    }

    if (avatarImage) {
        avatarImage.addEventListener("dblclick", () => {
            alert("Не налегай! Хватит кликать.");
            console.log("Картинка: ", avatarImage)
        });
    } else {
        console.error("Изображение не найдено!");
    }
});
document.addEventListener("DOMContentLoaded", () => {

    const openPopUps = document.querySelectorAll('.open_pop_up');
    const popUps = document.querySelectorAll('.pop_up');
    const closePopUps = document.querySelectorAll('.pop_up_close');
    const forms = document.querySelectorAll('.pop_up form');

    console.log("openPopUps:", openPopUps);
    console.log("popUps:", popUps);
    console.log("closePopUps:", closePopUps);
    console.log("forms:", forms);

    // Открытие попапов
    openPopUps.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (popUps[index]) {
                popUps[index].classList.add('active');
            } else {
                console.error(`Попап с индексом ${index} не найден.`);
            }
        });
    });

    // Закрытие попапов
    closePopUps.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (popUps[index]) {
                popUps[index].classList.remove('active');
            } else {
                console.error(`Попап с индексом ${index} не найден.`);
            }
        });
    });

    // Валидация и обработка форм
    forms.forEach(form => {
        form.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => validateInput(input));
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            form.querySelectorAll("input").forEach(input => {
                validateInput(input);
                if (!input.checkValidity()) {
                    isValid = false;
                    input.reportValidity();
                }
            });

            if (isValid) {
                alert('Форма успешно отправлена!');
                form.reset();
            }
        });
    });

    function validateInput(input) {
        const name = input.name;
        const value = input.value.trim();

        if (name === "name" && value === "") {
            input.setCustomValidity("Пожалуйста, укажите ваше имя.");
        } else if (name === "email" && value === "") {
            input.setCustomValidity("Введите ваш e-mail.");
        } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            input.setCustomValidity("Введите корректный e-mail.");
        } else if (name === "phone" && value === "") {
            input.setCustomValidity("Укажите номер телефона.");
        } else if (name === "phone" && !/^\+7\d{10}$/.test(value)) {
            input.setCustomValidity("Телефон должен содержать только цифры.");
        } else if (name === "comment" && value === "") {
            input.setCustomValidity("Пожалуйста, оставьте комментарий.");
        } else {
            input.setCustomValidity("");
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const avatarImage = document.querySelector(".avatar");

    if (avatarImage) {
        avatarImage.addEventListener("mouseenter", () => {
            avatarImage.classList.add("rotate"); // При наведении добавляем класс
        });

        avatarImage.addEventListener("mouseleave", () => {
            avatarImage.classList.remove("rotate"); // При убирании мыши удаляем класс
        });
    }
});