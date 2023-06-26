const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');

// Функция для добавления вариантов выбора дней в зависимости от выбранного месяца и года
const populateDays = () => {
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  daySelect.innerHTML = '';

  for (let day = 1; day <= daysInMonth; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
  }
}

// Функция для добавления вариантов выбора месяцев
const populateMonths = () => {
  for (let month = 1; month <= 12; month++) {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  }
}

// Функция для добавления вариантов выбора лет
const populateYears = () => {
  const currentYear = new Date().getFullYear();

  for (let year = currentYear; year >= currentYear - 100; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

// Обработчик изменения выбранного месяца
monthSelect.addEventListener('change', populateDays);

// Обработчик изменения выбранного года
yearSelect.addEventListener('change', populateDays);

// Инициализация селектов
populateDays();
populateMonths();
populateYears();

//components
//rating

const ratingElement = document.querySelector('.rating');
const stars = ratingElement.querySelectorAll('.rating__star');

// Обработчик клика по звезде
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Удаление класса filled у всех звезд
    stars.forEach((s, i) => {
      if (i >= index) {
        s.classList.add('rating__star--filled');
      } else {
        s.classList.remove('rating__star--filled');
      }
    });
  });
});

//progress
const progressBar = document.querySelector('.progress__bar');
const progressLabel = document.querySelector('.progress__label');

const setProgressBar = () => {
  const width = progressBar.offsetWidth;
  const maxWidth = progressBar.parentNode.offsetWidth;
  const percent = Math.floor((width / maxWidth) * 100);
  progressLabel.textContent = `${percent} %`;
};

setProgressBar();
