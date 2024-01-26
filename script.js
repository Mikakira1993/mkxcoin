let score = 0;

const gamePhoto = document.getElementById('game-photo');

gamePhoto.addEventListener('click', function() {
    collectPoint();
    // Добавляем класс "clicked" для активации анимации махания
    gamePhoto.classList.add('clicked');
    // Убираем класс "clicked" после окончания анимации
    setTimeout(function() {
        gamePhoto.classList.remove('clicked');
    }, 500); // Время анимации в миллисекундах (0.5 секунды)
});

function collectPoint() {
    score++;
    updateScore();
    if (score >= 1000) {
        changePhoto1();
    }
    if (score >= 5000) {
        changePhoto2();
    }
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Всего Очков:${score}`;
}

function changePhoto1() {
    gamePhoto.src = "./img/silver png.png";
}

function changePhoto2() {
    gamePhoto.src = "./img/gold png.png";
}