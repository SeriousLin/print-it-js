const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
		
		
		
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

let numero = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerTag = document.querySelector("#banner p");
const bannerDot = document.querySelector(".dots");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function createDot() {
	for (let slide in slides) {
		console.log(slide)
		const dot = document.createElement("span")
		dot.classList.add("dot")
		if (slide == 0) {
			dot.classList.add("dot_selected")
		} 
		dot.setAttribute("id", "dot_"+slide)
		bannerDot.appendChild(dot)
	}
	
}
createDot() 

function changeDot(sens) {
	let index = numero + sens; // calcule l'index du point à activer 
	if (index < 0) {
		index += bannerDot.length; // si l'index est négatif, on le ramène à la fin du tableau
	}
	if (index >= bannerDot.length) { // si l'index est supérieur on le ramène au début
		index = 0;
	}
	const dotSelected = document.querySelector(".dot_selected")
	dotSelected.classList.remove("dot_selected")
	const newdotSelected = document.querySelector("#dot_"+numero)
	newdotSelected.classList.add("dot_selected")
	
}

function changeSlide(sens) {
	numero += sens;
	numero %= slides.length;
	if (numero < 0) {
		numero += slides.length;
	}

	

	bannerImg.src = "assets/images/slideshow/" + slides[numero].image;
	bannerTag.innerHTML = slides[numero].tagLine;
}

arrowLeft.addEventListener("click", function() {
	console.log("click sur la flèche gauche");
	changeSlide(-1); // sens négatif pour aller à gauche
	changeDot(-1); // change le point actif au précédent
});

arrowRight.addEventListener("click", function() {
	console.log("click sur la flèche droite");
	changeSlide(1); // sens positif pour aller à droite
	changeDot(1);	// change le point actif au suivant
});

