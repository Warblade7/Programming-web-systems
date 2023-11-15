// Funkcja zmieniająca tekst na stronie
function changeText() {
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = 'Nowy tekst na stronie!';
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
var changeTextButton = document.getElementById('changeTextBtn');
changeTextButton.addEventListener('click', changeText);

// Funkcja generująca losową liczbę całkowitą
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    window.alert('Wylosowano liczbę: ' + randomNumber);
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
var randomNumberButton = document.getElementById('randomNumberBtn');
randomNumberButton.addEventListener('click', generateRandomNumber);

// Funkcja pytająca użytkownika o imię i wypisująca powitanie
function greetUser() {
    var userName = window.prompt('Podaj swoje imię:');
    if (userName) {
        window.alert('Witaj, ' + userName + '!');
    } else {
        window.alert('Witaj!');
    }
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
var greetUserButton = document.getElementById('greetUserBtn');
greetUserButton.addEventListener('click', greetUser);

// Funkcja sumująca dwie liczby
function addNumbers() {
    var num1 = parseFloat(window.prompt('Podaj pierwszą liczbę:'));
    var num2 = parseFloat(window.prompt('Podaj drugą liczbę:'));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        window.alert('Suma: ' + sum);
    } else {
        window.alert('Wprowadź poprawne liczby!');
    }
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
var addNumbersButton = document.getElementById('addNumbersBtn');
addNumbersButton.addEventListener('click', addNumbers);

// Funkcja wykonująca operacje z użyciem parseInt, while, do while, for, switch
function performOperations() {
    // Użycie parseInt
    var intValue = parseInt("10");
    window.alert('Parsed Int: ' + intValue);

    // Użycie pętli while
    var i = 0;
    while (i < 5) {
        window.alert('While Loop Iteration ' + i);
        i++;
    }

    // Użycie pętli do while
    var j = 0;
    do {
        window.alert('Do-While Loop Iteration ' + j);
        j++;
    } while (j < 5);

    // Użycie pętli for
    for (var k = 0; k < 5; k++) {
        window.alert('For Loop Iteration ' + k);
    }

    // Użycie switch
    var day = 'Monday';
    switch (day) {
        case 'Monday':
            window.alert('It\'s Monday!');
            break;
        case 'Tuesday':
            window.alert('It\'s Tuesday!');
            break;
        default:
            window.alert('It\'s another day!');
    }
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
var performOperationsButton = document.getElementById('performOperationsBtn');
performOperationsButton.addEventListener('click', performOperations);

// Wywołanie funkcji po załadowaniu strony
document.writeln('Strona została załadowana.');