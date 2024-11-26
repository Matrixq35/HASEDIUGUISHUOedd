document.addEventListener('DOMContentLoaded', () => {
    const miningBtn = document.getElementById('mining-btn');
    const improvementsBtn = document.getElementById('improvements-btn');
    const tasksBtn = document.getElementById('tasks-btn');

    const miningSection = document.getElementById('mining-section');
    const improvementsSection = document.getElementById('improvements-section');
    const tasksSection = document.getElementById('tasks-section');

    // Функция для скрытия всех секций
    function hideSections() {
        miningSection.style.display = 'none';
        improvementsSection.style.display = 'none';
        tasksSection.style.display = 'none';

        // Убираем активные классы с кнопок
        miningBtn.classList.remove('active');
        improvementsBtn.classList.remove('active');
        tasksBtn.classList.remove('active');
    }

    // Добавление событий для кнопок навигации
    miningBtn.addEventListener('click', () => {
        hideSections();
        miningSection.style.display = 'block';
        miningBtn.classList.add('active');
    });

    improvementsBtn.addEventListener('click', () => {
        hideSections();
        improvementsSection.style.display = 'block';
        improvementsBtn.classList.add('active');
    });

    tasksBtn.addEventListener('click', () => {
        hideSections();
        tasksSection.style.display = 'block';
        tasksBtn.classList.add('active');
    });

    // Изначально отображаем раздел Майнинг
    miningSection.style.display = 'block';
    miningBtn.classList.add('active');
});
