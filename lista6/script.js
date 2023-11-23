function pokazKolekcje() {
    console.log("Obrazy:", document.images);
    console.log("Linki:", document.links);
    console.log("Formularze:", document.forms);
    console.log("Kotwice:", document.anchors);

    // Przykłady użycia item i namedItem
    console.log("Pierwszy obraz:", document.images.item(0).alt);
    console.log("Drugi obraz przez id:", document.images.namedItem("secondImage").alt);
    console.log("Link przez id:", document.links.namedItem("exampleLink").href);
}

// Wywołanie funkcji pokazującej kolekcje przy załadowaniu strony
window.onload = pokazKolekcje;

function zmienStyl(wlasnosc, wartosc) {
    document.body.style[wlasnosc] = wartosc;
}

document.getElementById("obszarTestowy").addEventListener("mousemove", pokazInfoEvent);
document.getElementById("obszarTestowy").addEventListener("mousedown", pokazInfoEvent);
document.getElementById("obszarTestowy").addEventListener("mouseover", pokazInfoEvent);
document.getElementById("obszarTestowy").addEventListener("mouseout", pokazInfoEvent);

function pokazInfoEvent(event) {
    let info = "Typ zdarzenia: " + event.type +
               ", keyCode: " + event.keyCode +
               ", altKey: " + event.altKey +
               ", ctrlKey: " + event.ctrlKey +
               ", shiftKey: " + event.shiftKey +
               ", clientX: " + event.clientX +
               ", clientY: " + event.clientY +
               ", screenX: " + event.screenX +
               ", screenY: " + event.screenY;
    document.getElementById("infoEvent").textContent = info;
}

let input = document.querySelector("input[name='exampleInput']");

document.addEventListener("DOMContentLoaded", function() {
    var inputElement = document.getElementsByName("exampleInput1")[0];
    var infoElement = document.getElementById("exampleInput1Info");

    inputElement.addEventListener("focus", function() {
        infoElement.textContent = "Focus na pierwszym polu tekstowym.";
    });

    inputElement.addEventListener("blur", function() {
        infoElement.textContent = "Blur na pierwszym polu tekstowym.";
    });

    document.getElementById("exampleForm1").addEventListener("submit", function(event) {
        infoElement.textContent = "Formularz 1 został wysłany.";
        event.preventDefault();
    });

    document.getElementById("exampleForm1").addEventListener("reset", function() {
        infoElement.textContent = "Formularz 1 został zresetowany.";
    });
});



function demoBezTrybuScislego() {
    try {
        zmiennaBezDeklaracji = "Jestem niezadeklarowaną zmienną";
        document.getElementById("wynik").textContent = "Bez Trybu Ścisłego: " + zmiennaBezDeklaracji;
    } catch (e) {
        document.getElementById("wynik").textContent = "Błąd: " + e.message;
    }
}

function demoZTrybemScislym() {
    try {
        'use strict';
        zmiennaBezDeklaracji = "Jestem niezadeklarowaną zmienną";
        document.getElementById("wynik").textContent = "Z Trybem Ścisłym: " + zmiennaBezDeklaracji;
    } catch (e) {
        document.getElementById("wynik").textContent = "Błąd: " + e.message;
    }
}

function pokazInfoEvent(event) {
    let info = "Typ zdarzenia: " + event.type;

    // Sprawdź, czy właściwości są dostępne dla konkretnego typu zdarzenia
    if (event.clientX !== undefined && event.clientY !== undefined) {
        info += ", clientX: " + event.clientX +
                ", clientY: " + event.clientY;
    }

    if (event.screenX !== undefined && event.screenY !== undefined) {
        info += ", screenX: " + event.screenX +
                ", screenY: " + event.screenY;
    }

    // Użyj właściwości code zamiast keyCode
    if (event.code !== undefined) {
        info += ", code: " + event.code;
    }

    // Pozostałe właściwości
    info += ", altKey: " + event.altKey +
            ", ctrlKey: " + event.ctrlKey +
            ", shiftKey: " + event.shiftKey;

    // Wyświetl informacje w elemencie "infoEvent"
    document.getElementById("infoEvent").textContent = info;
}

// Dodanie nasłuchiwania zdarzeń myszy na obszarze testowym
document.getElementById("obszarTestowy").addEventListener("mousemove", pokazInfoEvent);
document.getElementById("obszarTestowy").addEventListener("mousedown", pokazInfoEvent);
document.getElementById("obszarTestowy").addEventListener("mouseover", pokazInfoEvent);
document.getElementById("obszarTestowy").addEventListener("mouseout", pokazInfoEvent);