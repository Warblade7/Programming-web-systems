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

var element = document.getElementById("myElement");

        element.addEventListener("mouseover", function() {
            this.classList.add("highlight");
        });

        element.addEventListener("mouseout", function() {
            this.classList.remove("highlight");
        });
        
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




// function pokazInfoEvent(event) {
//     let info = "Typ zdarzenia: " + event.type;

//     // Sprawdź, czy właściwości są dostępne dla konkretnego typu zdarzenia
//     if (event.clientX !== undefined && event.clientY !== undefined) {
//         info += ", clientX: " + event.clientX +
//                 ", clientY: " + event.clientY;
//     }

//     if (event.screenX !== undefined && event.screenY !== undefined) {
//         info += ", screenX: " + event.screenX +
//                 ", screenY: " + event.screenY;
//     }

//     // Użyj właściwości code zamiast keyCode
//     if (event.code !== undefined) {
//         info += ", code: " + event.code;
//     }

//     // Pozostałe właściwości
//     info += ", altKey: " + event.altKey +
//             ", ctrlKey: " + event.ctrlKey +
//             ", shiftKey: " + event.shiftKey;

//     // Wyświetl informacje w elemencie "infoEvent"
//     document.getElementById("infoEvent").textContent = info;
// }

// Dodanie nasłuchiwania zdarzeń myszy na obszarze testowym


var elementsToAdd = ["Element 1", "Element 2", "Element 3"];

// Pobierz referencję do listy
var numberedList = document.getElementById("numberedList");

// Zademonstruj działanie metod JavaScript
for (var i = 0; i < elementsToAdd.length; i++) {
    // Utwórz nowy element <li>
    var listItem = document.createElement("li");

    // Utwórz tekst dla elementu <li>
    var textNode = document.createTextNode(elementsToAdd[i]);

    // Dodaj tekst do elementu <li>
    listItem.appendChild(textNode);

    // Wstaw element <li> do listy przed pierwszym elementem (insertBefore)
    numberedList.insertBefore(listItem, numberedList.firstChild);

    // Zastąp drugi element na liście nowym elementem "Nowy Element"
    if (i === 1) {
        var newElement = document.createElement("li");
        var newText = document.createTextNode("Nowy Element");
        newElement.appendChild(newText);
        numberedList.replaceChild(newElement, listItem);
    }
}

// Usuń trzeci element z listy
var thirdElement = numberedList.children[2];
numberedList.removeChild(thirdElement);

// Wyświetl parentNode dla pierwszego elementu
var firstElement = numberedList.firstChild;
console.log("parentNode dla pierwszego elementu:", firstElement.parentNode);

var liczbaElementow = 0;

function utworzElement() {
    var newElement = document.createElement("li");
    newElement.appendChild(document.createTextNode("Element " + (++liczbaElementow)));
    document.getElementById("numberedList").appendChild(newElement);
    aktualizujNumeracje();
    alert("Utworzono nowy element");
}

function utworzTekst() {
    var textNode = document.createTextNode("Tekst " + (++liczbaElementow));
    var newElement = document.createElement("li");
    newElement.appendChild(textNode);
    document.getElementById("numberedList").appendChild(newElement);
    aktualizujNumeracje();
    alert("Utworzono nowy tekst");
}

function dodajDoListy() {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("Nowy element listy " + (++liczbaElementow)));
    document.getElementById("numberedList").appendChild(listItem);
    aktualizujNumeracje();
    alert("Dodano nowy element do listy");
}

function wstawPrzed() {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("Nowy element przed istniejącym " + (++liczbaElementow)));
    var existingItem = document.getElementById("numberedList").firstChild;
    document.getElementById("numberedList").insertBefore(listItem, existingItem);
    aktualizujNumeracje();
    alert("Wstawiono nowy element przed istniejącym");
}

function zastapElement() {
    var newElement = document.createElement("li");
    newElement.appendChild(document.createTextNode("Nowy element (zastąpił istniejący) " + (++liczbaElementow)));
    var existingItem = document.getElementById("numberedList").firstChild;
    document.getElementById("numberedList").replaceChild(newElement, existingItem);
    aktualizujNumeracje();
    alert("Zastąpiono istniejący element nowym");
}

function usunElement() {
    var existingItem = document.getElementById("numberedList").firstChild;
    document.getElementById("numberedList").removeChild(existingItem);
    aktualizujNumeracje();
    alert("Usunięto istniejący element");
}

function wyswietlParentNode() {
    var firstElement = document.getElementById("numberedList").firstChild;
    alert("parentNode dla pierwszego elementu na liście: " + firstElement.parentNode.tagName);
}

function aktualizujNumeracje() {
    // var elements = document.getElementById("numberedList").getElementsByTagName("li");
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].textContent = "Element " + (i + 1);
    // }
}
