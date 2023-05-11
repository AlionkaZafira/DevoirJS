//1-Création d’un générateur de mot de passe complexe (chiffres + alphabet en min + maj et caractères spéciaux)
function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(charIndex);
    }
    return password;
}

// Exemple d'utilisation pour générer un mot de passe de 12 caractères
var password = generatePassword(12);
console.log(password);

//2-Création d’un convertisseur qui transforme les degrés Celsius en Fahrenheit et inversement
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Exemple d'utilisation pour convertir 25 degrés Celsius en Fahrenheit
var celsius = 25;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + " degrés Celsius = " + fahrenheit + " degrés Fahrenheit");

// Exemple d'utilisation pour convertir 70 degrés Fahrenheit en Celsius
var fahrenheit = 70;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + " degrés Fahrenheit = " + celsius + " degrés Celsius");

//3-Création d’un générateur de citations dans une Pop-up/Modal (pop-up activante et désactivable au click)
var citations = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "Le succès c'est tomber sept fois, se relever huit. - Proverbe japonais",
    "La meilleure façon de prédire l'avenir est de l'inventer. - Alan Kay",
    "Le pessimiste voit la difficulté dans chaque opportunité. L'optimiste voit l'opportunité dans chaque difficulté. - Winston Churchill",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites. Si vous n'avez pas encore trouvé, continuez à chercher. Ne vous contentez pas. Comme avec toutes les affaires du cœur, vous saurez quand vous le trouverez. - Steve Jobs"
];

var modal = document.getElementById("citation-modal");
var btn = document.getElementById("citation-btn");
var span = document.getElementsByClassName("close")[0];
var citation = document.getElementById("citation");

btn.onclick = function () {
    var randomIndex = Math.floor(Math.random() * citations.length);
    citation.innerHTML = citations[randomIndex];
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//4-Création d’un DarkMode, qui varie en mode jour ou nuit l’ensemble du style sur votre page
var darkModeToggle = document.getElementById("dark-mode-toggle");
var body = document.getElementsByTagName("body")[0];

darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});
//5-Crée un burger menu, qui au click de son icon s’ouvre et se referme.
var burgerMenu = document.querySelector(".burger-menu");
var nav = document.querySelector("nav");

burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("open");
});
