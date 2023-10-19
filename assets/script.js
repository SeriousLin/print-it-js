// Définir un tableau d'objets contenant les informations des slides du diaporama
const slides = [
	{
		"image": "slide1.jpg", // le nom du fichier image du slide
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>", // le texte à afficher sur le slide
		
		
		
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
		
		
		
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
		
	}
]


let numero = 0; // Déclaration de la variable pour stocker l'index du slide actuel
const bannerImg = document.querySelector(".banner-img"); // Sélectionne l'élément HTML qui contient l'image du diaporama
const bannerTag = document.querySelector("#banner p"); // Sélectionne l'élément HTML qui contient le texte du diaporama
const bannerDot = document.querySelector(".dots"); // Sélectionne l'élément HTML qui contient les points de navigation du diaporama

const arrowLeft = document.querySelector(".arrow_left"); // Sélectionner l'élément HTML qui contient la flèche gauche du diaporama
const arrowRight = document.querySelector(".arrow_right"); // Sélectionner l'élément HTML qui contient la flèche droite du diaporama

// Fonction pour créer les points de navigation en fonction du nombre de slides
function createDot() {
	for (let slide in slides) { // parcourir le tableau des slides
		console.log(slide) // afficher l'index du slide dans la console
		const dot = document.createElement("span") // création de l'élément span 
		dot.classList.add("dot") // ajout de la classe CSS "dot" au point
		if (slide == 0) { // si c'est le premier slide
			dot.classList.add("dot_selected") // ajout de la classe CSS "dot_selected" au point pour indiquer qu'il est actif
		} 
		dot.setAttribute("id", "dot_"+slide) // attribu un id au point en fonction de l'index du slide
		bannerDot.appendChild(dot) // ajout du point comme enfant de l'élément HTML des points de navigation
	}
	
}
createDot()  // appel de la fonction pour créer les points

// Fonction pour changer le point actif en fonction du sens de défilement du diaporama
function changeDot(sens) {
	let index = numero + sens; // calcule l'index du point à activer 
	if (index < 0) { // si l'index est négatif, on le ramène à la fin du tableau
		index += bannerDot.length; 
	}
	if (index >= bannerDot.length) { // si l'index est supérieur ou égal au nombre de slides, on le ramène au début du tableau
		index = 0;
	}
	const dotSelected = document.querySelector(".dot_selected") // sélectionne le point actuel qui est actif
	dotSelected.classList.remove("dot_selected") // retire la classe CSS "dot_selected" au point actif
	const newdotSelected = document.querySelector("#dot_"+numero) // sélectionne le nouveau point à activer en fonction de l'index calculé
	newdotSelected.classList.add("dot_selected") // ajout de la classe CSS "dot_selected" au nouveau point actif
	
}

// Fonction pour changer le slide affiché en fonction du sens de défilement du diaporama
function changeSlide(sens) {
	numero += sens; // incrémenter ou décrémenter l'index du slide actuel en fonction du sens (1 ou -1)
	numero %= slides.length; // calcule le reste de la division de l'index par le nombre de slides pour obtenir un index valide dans le tableau des slides
	if (numero < 0) { // si l'index est négatif, on le ramène à la fin du tableau slides
		numero += slides.length;
	}

	

	bannerImg.src = "assets/images/slideshow/" + slides[numero].image; // change la source de l'image du diaporama en fonction de l'index du slide actuel
	bannerTag.innerHTML = slides[numero].tagLine; // change le texte du diaporama en fonction de l'index du slide actuel, "innerHTML"met à jour l'affichage de la page web
}

// Ajout d'un écouteur d'évènement click sur la flèche gauche du diaporama
arrowLeft.addEventListener("click", function() {
	console.log("click sur la flèche gauche"); // sert à afficher un message dans la console
	changeSlide(-1); // appel de la fonction "changeSlide" avec un sens négatif pour aller au slide précédent
	changeDot(-1); // appel de la fonction "changeDot" avec un sens négatif pour aller au slide précédent
});

// Ajout d'un écouteur d'évènement click sur la flèche droite du diaporama
arrowRight.addEventListener("click", function() {
	console.log("click sur la flèche droite"); 
	changeSlide(1); // appel de la fonction "changeSlide" avec un sens positif pour aller au slide suivant
	changeDot(1);	// appel de la fonction "changeDot" avec un sens positif pour changer le point actif au suivant
});

