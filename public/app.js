'use strict';

/* 
Step 1
Créer un fichier app.js permettant de saluer l'utilisateur. 
L'utilisateur saisit son nom dans un champ de texte. 
Quand l'utilisateur clique sur le bouton, le programme doit afficher juste en dessous *** "Bonjour {nom saisi} !" ***.
Si le champ est vide, le programme affiche *** "Bonjour Père Noël !" ***.

Step 2

Garder en mémoire sous forme de tableau la liste des noms saisies. 
Afficher cet historique sur la page et pour chacun des noms,
mettre la première lettre en majuscule et le reste en minuscule.

Step 3

Ajouter un champ de recherche et un bouton au dessus de l'historique.
Lorsque ce bouton est cliqué, n'afficher que les noms commençant
 par la chaîne de caractères saisie dans ce champ ('case insensitive').
*/

/* Greetings */

var btnGreet = document.getElementById('greetings');
var history = document.getElementById('history');
var array = [];
var greet = function greet() {
    var nameInput = document.getElementById('name');
    name = nameInput.value !== "" ? nameInput.value : "Père Noël";

    var content = document.getElementById('content');
    content.textContent = 'Bonjour ' + name + ' !';

    /* let word = ;
    array.push(word);
    console.log(array);
    */
    localStorage.setItem('nameInput', '' + name.charAt(0).toUpperCase() + name.substr(1));
    // `${(Math.random() * Math.floor())}`
    // const map1 = array.map(x => x)
    // console.log(map1[x]);

    /* History Name Loop */
    for (i = 0; i < localStorage.length; i++) {
        console.log('For Loop to see the nameInput into the localStorage : ' + localStorage.getItem(localStorage.key(i)));
        // Append content into the table
        var username = localStorage.getItem(localStorage.key(i));
        history.append(username);
    }
    //history.append(storedValue);
};

btnGreet.addEventListener('click', greet, false);

/* History research case insensitive */
var btnHistory = document.getElementById('search');
var storedValue = localStorage.getItem('nameInput');
var greetingsHistory = document.getElementById('search-history');
var research = function research() {
    var searchInput = document.getElementById('searchbar');

    // Using a RegExp to the UserInput search 
    var storedInput = new RegExp(searchInput.value, 'i');

    // It return True when ignoreCase is used 
    console.log('Ignore Case : ' + storedInput.ignoreCase);

    /* Loop to acces localstorage inputNames */
    for (i = 0; i < localStorage.length; i++) {
        // Store the String to compare it
        var storageLoop = localStorage.getItem(localStorage.key(i));
        console.log('Local Storage Loop result : ' + storageLoop); // For debug
        // Compare local storage string with UserInput search
        var compare = storageLoop.match(storedInput); // For debug
        console.log('Compare Search Input & Stored : ' + compare); // For debug

        /* case-insensitive research */
        if (storageLoop.localeCompare(searchInput.value) && searchInput.value !== "") {
            // return the storedValue
            greetingsHistory.textContent = storedValue;
        } else {
            greetingsHistory.textContent = 'Aucun résultat';
        }
    }
    // console.log(storageLoop);
};

btnHistory.addEventListener('click', research, false);

/* Clear local storage */
var btnClear = document.getElementById('clear');
var clear = function clear() {
    localStorage.clear();
    alert('Cache vidé avec succes');
};

btnClear.addEventListener('click', clear, false);
