		let theDrinkingAndDriving = document.querySelector("#drinkinganddriving");

		function logThisDrinkingAndDriving() {
			console.log(this.id);
		}

		theDrinkingAndDriving.addEventListener("click", logThisDrinkingAndDriving);


		let theAmbulance = document.querySelector("#ambulance");

		function logThisAmbulance() {
			console.log(this.id);
		}

		theAmbulance.addEventListener("click", logThisAmbulance);


		let theCautionSign = document.querySelector("#cautionsign");

		function logThisCautionSign() {
			console.log(this.id);
		}

		theCautionSign.addEventListener("click", logThisCautionSign);


		let theCar = document.querySelector("#car");

		function logThisCar() {
			console.log(this.id);
		}

		theCar.addEventListener("click", logThisCar);


		let theKey = document.querySelector("#key");

		function logThisKey() {
			console.log(this.id);
		}

		theKey.addEventListener("click", logThisKey);


		let theMarker = document.querySelector("#marker");

		function logThisMarker() {
			console.log(this.id);
		}

		theMarker.addEventListener("click", logThisMarker);


		let theSeatBelt = document.querySelector("#seatbelt");

		function logThisSeatBelt() {
			console.log(this.id);
		}

		theSeatBelt.addEventListener("click", logThisSeatBelt);


		let theStopLights = document.querySelector("#stoplights");

		function logThisStopLights() {
			console.log(this.id);
		}

		theStopLights.addEventListener("click", logThisStopLights);


		let theStopSign = document.querySelector("#stopsign");

		function logThisStopSign() {
			console.log(this.id);
		}

		theStopSign.addEventListener("click", logThisStopSign);


		let theGasPump = document.querySelector("#gaspump");

		function logThisGasPump() {
			console.log(this.id);
		}

		theGasPump.addEventListener("click", logThisGasPump);

document.querySelector("#stoplights").addEventListener('click', slfill);
function slfill() {
	document.getElementById('stoplights').classList.add("fill");
}

document.querySelector("#ambulance").addEventListener('click', afill);
function afill() {
	document.getElementById('ambulance').classList.add("fill");
}

document.querySelector("#car").addEventListener('click', cfill);
function cfill() {
	document.getElementById('car').classList.add("fill");
}

document.querySelector("#cautionsign").addEventListener('click', csfill);
function csfill() {
	document.getElementById('cautionsign').classList.add("fill");





}

document.querySelector("#drinkinganddriving").addEventListener('click', dfill);
function dfill() {
	document.getElementById('drinkinganddriving').classList.add("fill");
}

document.querySelector("#gaspump").addEventListener('click', gfill);
function gfill() {
	document.getElementById('gaspump').classList.add("fill");
}

document.querySelector("#key").addEventListener('click', kfill);
function kfill() {
	document.getElementById('key').classList.add("fill");
}

document.querySelector("#marker").addEventListener('click', mfill);
function mfill() {
	document.getElementById('marker').classList.add("fill");
}

document.querySelector("#seatbelt").addEventListener('click', sbfill);
function sbfill() {
	document.getElementById('seatbelt').classList.add("fill");
}

document.querySelector("#stopsign").addEventListener('click', ssfill);
function ssfill() {
	document.getElementById('stopsign').classList.add("fill");
}