// Versets du jour
const verses = [
    { text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", reference: "Jean 3:16" },
    { text: "Je puis tout par celui qui me fortifie.", reference: "Philippiens 4:13" },
    { text: "Ne vous inquiétez de rien, mais en toute chose, par la prière et la supplication, avec des actions de grâces, faites connaître vos demandes à Dieu.", reference: "Philippiens 4:6" },
    { text: "Recherchez la paix avec tous, et la sanctification, sans laquelle personne ne verra le Seigneur.", reference: "Hébreux 12:14" }
];

// Fonction pour changer le verset du jour
function changeVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verseText = document.querySelector('.verse-card p:first-of-type');
    const verseRef = document.querySelector('.verse-card p:last-of-type');
    
    if (verseText && verseRef) {
        verseText.textContent = `"${verses[randomIndex].text}"`;
        verseRef.textContent = `- ${verses[randomIndex].reference}`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Change le verset au chargement
    changeVerse();
    
    // Ajouter un écouteur d'événement si le verset-card existe
    const verseCard = document.querySelector('.verse-card');
    if (verseCard) {
        verseCard.addEventListener('click', changeVerse);
    }
    
    // Autres initialisations JavaScript peuvent être ajoutées ici
});