const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let numero = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerTag = document.querySelector("#banner p");
const bannerDot = document.querySelector(".dots input")

function changeSlide(sens) {
	numero += sens;
	numero %= slides.length;
	if (numero < 0) {
		numero += slides.length;
	}

	

	bannerImg.src = "assets/images/slideshow/" + slides[numero].image;
	bannerTag.innerHTML = slides[numero].tagLine;
	bannerDot.classList.remove("dot_selected");



}
