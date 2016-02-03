function Employee(name, employeeNumber, salary, rating, bonusPercentage, adjustedIncome, bonusAmount){
	this.name = name;
	this.employeeNumber = employeeNumber;
	this.salary = salary;
	this.rating = rating;
	this.bonusPercentage = bonusPercentage;
	this.adjustedIncome = adjustedIncome;
	this.bonusAmount = bonusAmount;
}

var atticus = new Employee("Atticus", "2405", "47000", 3, null, null, null);
var jem = new Employee("Jem", "62347", "63500", 4, null, null, null);
var boo = new Employee("Boo", "11435", "54000", 3, null, null, null);
var scout = new Employee("Scout", "6243", "74750", 5, null, null, null);


function calculateSTI(empInfo){
	var name = empInfo.name;
	var employeeNumber = empInfo.employeeNumber;
	var salary = empInfo.salary;
	var rating = empInfo.rating;
	var bonusPercentage = empInfo.bonusPercentage;
	var adjustedIncome = empInfo.adjustedIncome;
	var bonusAmount = empInfo.bonusAmount;

	switch(rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(employeeNumber, bonusPercentage, salary);

	bonusAmount = Math.round(bonusPercentage * salary);

	adjustedIncome = salary + bonusAmount;

	empInfo.bonusPercentage = bonusPercentage;
	empInfo.bonusAmount = bonusAmount;
	empInfo.adjustedIncome = adjustedIncome;

	return empInfo;
}


function adjustBonusPercentage(employeeNumber, bonusPercentage, salary) {
	if(employeeNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(salary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}



console.log(calculateSTI(atticus));
console.log(calculateSTI(jem));
console.log(calculateSTI(boo));
console.log(calculateSTI(scout));

