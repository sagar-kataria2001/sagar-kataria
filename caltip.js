window.onload = () =>
//the function called when Calculate button is clicked.
{
	/*calling a function calculateTip
	which will calculate the tip for the bill.*/
	document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip() {
	/*assing values of ID : amount, person and service to
	variables for further calculations.*/
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	/*if condition will work when user presses
		calculate without entering values. */
	//so will display an alert box and return.
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	else if (parseFloat(amount) < 0) {
		alert("Please enter valid amount");
		return;
	} else if (parseInt(persons) <= 0) {
		alert("please Enter valid users");
		return;
	}
	else if (parseInt(persons) > parseInt(amount)) {
		alert("Enter valid values");
		return;
	}
	

	/*calculating the tip by multiplying total-bill and type of
	service; then dividing it by number of persons.*/
	//fixing the total amount upto 2 digits of decimal
	let total = (amount * service) / persons;
	total = total.toFixed(2);
	let totalamt = (parseFloat(amount)) / persons + parseInt(total);
	totalamt = totalamt.toFixed(2);

	//finally displaying the tip value
	document.querySelector('.tip').style.display = 'flex';
	document.querySelector('#total').innerHTML = total;
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total2').innerHTML = totalamt;
}
