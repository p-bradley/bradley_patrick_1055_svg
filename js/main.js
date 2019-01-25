let theDrinkingAndDriving = document.querySelector("#drinkinganddriving");

		function logThisDrinkingAndDriving() {
			console.log(this.id);
		}

		theDrinkingAndDriving.addEventListener("click", logThisDrinkingAndDriving);
