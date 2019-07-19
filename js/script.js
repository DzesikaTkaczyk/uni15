'use strict';
(function(){ 
	function Phone(brand, price, color, iWant) {
		this.brand =  brand;
		this.price = price;
		this.color = color;
		this.iWant = iWant || 'no';
	}

	Phone.prototype.printInfo = function() {
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.' + 'Did i want it? -' + this.iWant);
	}

	var samsungGalaxyS6 = new Phone('Samsung', 800, 'black', 'maybe');
	var iPhone6S = new Phone("Apple", 2250, "silver");
	var onePlusOne = new Phone("OnePlus", 2099, "black");

	samsungGalaxyS6.printInfo();
	iPhone6S.printInfo();
	onePlusOne.printInfo();

})();