// Funkcja zmieniająca tekst na stronie
function changeText() {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "Nowy tekst na stronie!";
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
const changeTextButton = document.getElementById("changeTextBtn");
changeTextButton.addEventListener("click", changeText);

// Funkcja generująca losową liczbę całkowitą
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    window.alert("Wylosowano liczbę: " + randomNumber);
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
const randomNumberButton = document.getElementById("randomNumberBtn");
randomNumberButton.addEventListener("click", generateRandomNumber);

// Funkcja pytająca użytkownika o imię i wypisująca powitanie
function greetUser() {
    const userName = window.prompt("Podaj swoje imię:");
    if (userName) {
        window.alert("Witaj, " + userName + "!");
    } else {
        window.alert("Witaj!");
    }
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
const greetUserButton = document.getElementById("greetUserBtn");
greetUserButton.addEventListener("click", greetUser);


let sumOfNumbers = 0;
// Funkcja sumująca dwie liczby
function addNumbers() {
    const num1 = parseFloat(window.prompt("Podaj pierwszą liczbę:"));
    const num2 = parseFloat(window.prompt("Podaj drugą liczbę:"));

    if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
        const sum = num1 + num2;
        window.alert("Suma: " + sum);
        sumOfNumbers += sum;
    } else {
        window.alert("Wprowadź poprawne liczby!");
    }
}

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
const addNumbersButton = document.getElementById("addNumbersBtn");
addNumbersButton.addEventListener("click", addNumbers);

const parseIntButton = document.getElementById("parseIntBtn");
parseIntButton.addEventListener("click", () => {
    window.alert("Parsed Int: " + parseInt(sumOfNumbers));
});

// Funkcja wykonująca operacje z użyciem parseInt, while, do while, for, switch
function performOperations() {

    // Użycie pętli while
    let i = 0;
    while (i < 5) {
        window.alert("While Loop Iteration " + i);
        i++;
    }

    // Użycie pętli do while
    let j = 0;
    do {
        window.alert("Do-While Loop Iteration " + j);
        j++;
    } while (j < 5);

    // Użycie pętli for
    for (let k = 0; k < 5; k++) {
        window.alert("For Loop Iteration " + k);
    }

    // Użycie switch
    const day = "Monday";
    switch (day) {
        case "Monday":
            window.alert("It's Monday!");
            break;
        case "Tuesday":
            window.alert("It's Tuesday!");
            break;
        default:
            window.alert("It's another day!");
    }
}

window.addEventListener("click", function() {
    //window.alert("Kliknięto w okno a nie w przycisk!");
});

// Dodanie nasłuchiwania na zdarzenie kliknięcia przycisku
const performOperationsButton = document.getElementById("performOperationsBtn");
performOperationsButton.addEventListener("click", performOperations);

var guessButton = document.getElementById('guessBtn');
    var resultElement = document.getElementById('result');

    guessButton.addEventListener('click', function() {

        var randomNumber = parseInt(Math.floor(Math.random() * 100 )/10) + 1;


        var attempts = 3;
        var userGuess;


        while (attempts > 0) {

            userGuess = parseInt(prompt('Zgadnij liczbę od 1 do 10. Pozostałe próby: ' + attempts));

            // Sprawdzenie, czy wartość jest liczbą
            if (isNaN(userGuess)) {
                alert('Podaj poprawną liczbę!');
                continue;
            }

            if (userGuess === randomNumber) {
                resultElement.textContent = 'Gratulacje! Odgadłeś liczbę!';
                break;
            } else {
                alert(userGuess < randomNumber ? 'Za mała liczba!' : 'Za duża liczba!');
                attempts--;
            }
        }

        // Koniec gry
        if (attempts === 0 && userGuess !== randomNumber) {
            resultElement.textContent = 'Koniec gry. Wylosowana liczba to: ' + randomNumber;
            guessButton.disabled = true;    
        }
    });

// Wywołanie funkcji po załadowaniu strony
document.writeln("Załadowana strona");