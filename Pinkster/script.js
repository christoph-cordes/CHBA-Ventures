const unsplash_url = 'https://source.unsplash.com/random/?vespa';
// 1- Select the button https://learn.lewagon.com/c/5970/b/3420?page=78
// 2- Listen to the click
// 3- Play a Sound upon click

const myButton = document.querySelector("#nextbutton")

myButton.addEventListener("click", () => {
	console.log("I clicked button");
	const audio = new Audio('sound.mp3');
	audio.play();
  // myButton.style.visibility = "hidden"
  myButton.innerText = 'Great-next'
});

const vespaPhotos = document.querySelector("#scooter");
myButton.addEventListener("click", () => {
	console.log("I clicked button");
	fetch(unsplash_url) // request to the server for an image
  .then((response) => {
		console.log(response)
    vespaPhotos.src = response.url 
	})
});
