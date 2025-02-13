
// Получаем элементы
const modal = document.getElementById("videoModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fadeOutAudio(audioElement, duration) {
    const fadeOutInterval = 50; // Интервал изменения громкости (в миллисекундах)
    const steps = duration / fadeOutInterval; // Количество шагов
    const stepSize = audioElement.volume / steps; // Размер шага

    const fadeOut = setInterval(() => {
        if (audioElement.volume > 0) {
            audioElement.volume -= stepSize; // Уменьшаем громкость
        } else {
            audioElement.pause(); // Останавливаем музыку, когда громкость достигнет 0
            clearInterval(fadeOut); // Останавливаем интервал
        }
    }, fadeOutInterval);
}

