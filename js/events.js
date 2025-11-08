window.addEventListener('load', function() {
    console.log('Сторінка повністю завантажена (onload)');
});

window.addEventListener('beforeunload', function(e) {
    console.log('Користувач виходить зі сторінки (onbeforeunload)');
});

window.addEventListener('focus', function() {
    console.log('Вікно отримало фокус (onfocus)');
});

window.addEventListener('error', function(e) {
    console.error('Виникла помилка (onerror):', e.message);
});

window.addEventListener('resize', function() {
    console.log('Розмір вікна змінено (onresize):', window.innerWidth + 'x' + window.innerHeight);
});

function setupElementEventHandlers() {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, b, i, strong, em');
    
    elements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            console.log('Клік на елемент:', this.tagName);
            this.style.backgroundColor = '#ffeb3b';
            setTimeout(() => { this.style.backgroundColor = ''; }, 500);
        });

        element.addEventListener('dblclick', function(e) {
            console.log('Подвійний клік на:', this.tagName);
            this.style.color = '#e91e63';
            alert('Подвійний клік на: ' + this.textContent);
        });

        element.addEventListener('mousedown', function(e) {
            console.log('Кнопка миші натиснута на:', this.tagName);
            this.style.transform = 'scale(0.95)';
        });

        element.addEventListener('mouseup', function(e) {
            console.log('Кнопка миші відпущена на:', this.tagName);
            this.style.transform = 'scale(1)';
        });

        element.addEventListener('mouseover', function(e) {
            console.log('Миша наведена на:', this.tagName);
            this.style.textDecoration = 'underline';
            this.style.cursor = 'pointer';
        });

        element.addEventListener('mouseout', function(e) {
            console.log('Миша покинула:', this.tagName);
            this.style.textDecoration = 'none';
        });

        element.setAttribute('draggable', 'true');

        element.addEventListener('dragstart', function(e) {
            console.log('Початок перетягування:', this.tagName);
            this.style.opacity = '0.5';
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        });

        element.addEventListener('dragend', function(e) {
            console.log('Кінець перетягування:', this.tagName);
            this.style.opacity = '1';
        });
    });
}

function runTask() {
    const form = document.getElementById('productForm');
    if (!form) {
        alert('Форма не знайдена!');
        return;
    }

    let output = '=== ПЕРЕЛІК ВСІХ ЕЛЕМЕНТІВ ФОРМИ ===\n\n';
    output += 'Назва форми: ' + form.name + '\n';
    output += 'ID форми: ' + form.id + '\n';
    output += 'Метод: ' + form.method + '\n';
    output += 'Action: ' + form.action + '\n\n';
    output += 'Кількість елементів: ' + form.elements.length + '\n\n';
    output += '--- ЕЛЕМЕНТИ ФОРМИ ---\n\n';

    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        output += (i + 1) + '. ';
        output += 'Тип: ' + element.type + ' | ';
        output += 'Назва: ' + (element.name || 'без назви') + ' | ';
        output += 'ID: ' + (element.id || 'без ID') + ' | ';
        output += 'Значення: ' + (element.value || 'порожнє') + '\n';
    }

    const textarea = document.getElementById('taskOutput');
    if (textarea) {
        textarea.value = output;
    }

    console.log(output);
    alert('Інформація про форму виведена в текстове поле та консоль!');
}

function searchText() {
    const inputText = document.getElementById('searchInput').value;
    const outputArea = document.getElementById('searchOutput');
    
    if (!inputText) {
        alert('Будь ласка, введіть текст для пошуку!');
        return;
    }

    let result = '=== РЕЗУЛЬТАТИ ПОШУКУ ===\n\n';
    result += 'Вхідний текст:\n' + inputText + '\n\n';

    // 5.1. Кількість слів
    const words = inputText.match(/[а-яА-ЯіІїЇєЄґҐa-zA-Z]+/g);
    const wordCount = words ? words.length : 0;
    result += '5.1. Кількість слів: ' + wordCount + '\n';
    result += 'Слова: ' + (words ? words.join(', ') : 'немає') + '\n\n';

    // 5.2.4. Слова які починаються з 'г' та закінчуються на 'і'
    const wordsGI = inputText.match(/\b[гГ][а-яА-ЯіІїЇєЄґҐ]*[іІ]\b/g);
    result += '5.2.4. Слова що починаються з "г" і закінчуються на "і": ';
    result += (wordsGI ? wordsGI.length : 0) + '\n';
    result += 'Знайдені слова: ' + (wordsGI ? wordsGI.join(', ') : 'немає') + '\n\n';

    // 5.3. Цифри
    const digits = inputText.match(/\d/g);
    result += '5.3. Кількість цифр: ' + (digits ? digits.length : 0) + '\n';
    result += 'Цифри: ' + (digits ? digits.join(', ') : 'немає') + '\n\n';

    // 5.4. Цілі числа
    const integers = inputText.match(/-?\d+/g);
    result += '5.4. Цілі числа: ' + (integers ? integers.length : 0) + '\n';
    result += 'Числа: ' + (integers ? integers.join(', ') : 'немає') + '\n';

    outputArea.value = result;
    console.log(result);
}

function arrayTask() {
    const N = 8;
    const M = 6;
    
    const A = [];
    const B = [];
    
    for (let i = 0; i < N; i++) {
        A.push(Math.floor(Math.random() * 41) - 20);
    }
    
    for (let i = 0; i < M; i++) {
        B.push(Math.floor(Math.random() * 41) - 20);
    }

    const C = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) C.push(A[i]);
    }
    
    for (let i = 0; i < B.length; i++) {
        if (B[i] > 0) C.push(B[i]);
    }
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) C.push(A[i]);
    }
    
    for (let i = 0; i < B.length; i++) {
        if (B[i] < 0) C.push(B[i]);
    }

    let output = '=== ЗАВДАННЯ З МАСИВАМИ (Варіант 6.10) ===\n\n';
    output += 'Масив A (N=' + N + '):\n[' + A.join(', ') + ']\n\n';
    output += 'Масив B (M=' + M + '):\n[' + B.join(', ') + ']\n\n';
    output += 'Масив C (розмір: ' + C.length + '):\n[' + C.join(', ') + ']\n\n';
    output += 'Структура масиву C:\n';
    output += '1. Додатні A: [' + A.filter(x => x > 0).join(', ') + ']\n';
    output += '2. Додатні B: [' + B.filter(x => x > 0).join(', ') + ']\n';
    output += '3. Від\'ємні A: [' + A.filter(x => x < 0).join(', ') + ']\n';
    output += '4. Від\'ємні B: [' + B.filter(x => x < 0).join(', ') + ']\n';

    const textarea = document.getElementById('arrayOutput');
    if (textarea) {
        textarea.value = output;
    }
    
    console.log(output);
    alert('Масиви створено! Результат виведено в текстове поле та консоль.');
}

function setupImageEventHandlers() {
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
            console.log('Миша на зображенні:', this.alt || this.src);
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });

        img.addEventListener('click', function() {
            alert('Клік на зображення: ' + (this.alt || this.src));
        });

        img.addEventListener('dblclick', function() {
            this.style.filter = this.style.filter === 'grayscale(100%)' ? 'none' : 'grayscale(100%)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM завантажено, ініціалізація обробників подій...');
    setupElementEventHandlers();
    setupImageEventHandlers();
    console.log('Всі обробники подій налаштовано!');
});

