var receipt = ""; // initialilze receipt text, each function adds text to receipt
var total = 0; // total price, each function adds a subtotal to total

function placeOrder() {
	// Start by disabling Place Order button, so it can't be submittied twice
	// These attributes are reset by the clearOrder function
	document.getElementById("placeOrder").classList.add("btnClicked");
	document.getElementById("placeOrder").classList.remove("btn");
	document.getElementById("placeOrder").removeAttribute("onclick");
	document.getElementById("placeOrder").innerHTML = "<p>Submitted</p>";

	// Call each function to build reciept and total price
	size();
	crust();
	sauce();
	cheese();
	meat();	
	veggies();
	printReceipt();
	
};
	

function size() {
	var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			if (sizeArray[i].value === "Personal") {  // add base price of pizza to total
				total = total + 6;
			} else if (sizeArray[i].value === "Medium") {
				total = total + 10;
			} else if (sizeArray[i].value === "Large") {
				total = total + 14;
			} else if (sizeArray[i].value === "Extra Large") {
				total = total + 16;
			}
			receipt = "<strong>"+receipt+sizeArray[i].value+" Pizza:</strong> $"+total+".00<br>"; // add size and price of pizza to receipt
		};
	};
	
	console.log("receipt: "+receipt);
	console.log("total: "+total);	
};

function crust() {
	var crustArray = document.getElementsByClassName("crust");
	receipt = receipt+"Crust: ";
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			if (crustArray[i].value === "Cheese Stuffed") {  // charge for cheese stuffed crust
				receipt = receipt+"Cheese Stuffed Crust: $3.00<br>";
				total = total + 3;
			} else {  // all other crusts are free
				receipt = receipt+crustArray[i].value+"<br>";
			};
		};
	};
};

function sauce() { // add sauce type to order, no charges for sauce
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			receipt = receipt+"Sauce: "+sauceArray[i].value+"<br>";
		};
	};
};


function cheese() {
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			if (cheeseArray[i].value === "Extra Cheese") { // charge for extra cheese
				receipt = receipt+"Extra Cheese: $3.00<br>";
				total = total + 3;
			} else { // all others are free
				receipt = receipt+cheeseArray[i].value+"<br>";
			};
		};
	};
};


function meat() {
	var meatArray = document.getElementsByClassName("meat");
	var meatCount = 0;
	for (var i = 0; i < meatArray.length; i++) {
        if (meatArray[i].checked ) {
        	meatCount++;
            console.log("meat: "+meatArray[i].value);
			if (meatCount == 1) {  // add meats to receipt, first one is free
				receipt = receipt+"<br><strong>Meats: </strong><br>"+meatArray[i].value+": $0.00<br>";
			} else { // charge for additional meats
				receipt = receipt+meatArray[i].value+": $1.00<br>";
				total++;
			};
        };
    };
};

function veggies() {
	var veggiesArray = document.getElementsByClassName("veggies");
	var veggiesCount = 0;
	for (var i = 0; i < veggiesArray.length; i++) {
        if (veggiesArray[i].checked ) {
        	veggiesCount++;
            console.log("meat: "+veggiesArray[i].value);
			if (veggiesCount == 1) {  //add veggies to receipt, first one is free
				receipt = receipt+"<br><strong>Veggies: </strong><br>"+veggiesArray[i].value+": $0.00<br>";
			} else { // charge for additional veggies
				receipt = receipt+veggiesArray[i].value+": $1.00<br>";
				total++;
			};
        };
    };
};


// printReceipt() makes the receipt element visible and adds the text and total price
function printReceipt() {
	document.getElementById("receipt").style.opacity=1;
	document.getElementById("showText").innerHTML = receipt+"<br><strong>Total: $"+total+".00</strong>";
};

function clearOrder() {
	// reset order form and hide receipt
	document.getElementById("orderForm").reset();
	document.getElementById("receipt").style.opacity=0;

	// reset and enable Place Order button
	document.getElementById("placeOrder").classList.add("btn");
	document.getElementById("placeOrder").classList.remove("btnClicked");
	document.getElementById("placeOrder").setAttribute("onclick", "placeOrder()");
	document.getElementById("placeOrder").innerHTML = "<p>Place Order</p>";

	// Clear Variables for fresh order
	receipt = "";
	total = 0;
};