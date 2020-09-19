/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19

if (votingAge > 18) {
	console.log(true);
} else {

}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let varOne = 10
let varTwo = 5

varOne = varOne * varTwo



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999")



//Task d: Write a function to multiply a*b 

function multiply(a, b) {
	return a * b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogDays(age) {
	return age * 7;
}


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age) {
	// adult dogs at least 1 year 
	if (age >= 1) {
		// up to 5 lbs - 5% of their body weight
		if (weight <= 5) {
			return weight * .05;
		}
		// 6 - 10 lbs - 4% of their body weight 
		else if (weight >= 6 && weight <= 10) {
			return weight * .04;
		}
		// 11 - 15 lbs - 3% of their body weight 
		else if (weight >= 11 && weight >= 15) {
			return weight * .03;
		}
		// > 15lbs - 2% of their body weight 
		else if (weight > 15) {
			return weight * .02;
		}

	}
	// Puppies less than 1 year
	else if (age < 1) {
		// 2 - 4 months 10% of their body weight
		if (age >= .16 && age < .33) {
			return weight * .1;
		}
		// 4 - 7 months 5% of their body weight
		else if (age >= .33 && age < .58) {
			return weight * .05;
		}
		// 7 - 12 months 4% of their body weight
		else if (age >= .58) {
			return weight * .04;
		}
	}
}

// console.log(dogFeeder(15,1))



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rpsGame(input) {

	//convert user choice to number
	if (input === "rock") {
		var userChoice = 1;
	} else if (input === "paper") {
		var userChoice = 2;
	} else if (input === "sissors") {
		var userChoice = 3;
	}

	//computer's choice
	const compChoice = Math.floor(Math.random() * 3) + 1

	//determine winner
	if (userChoice === compChoice) {
		console.log("Draw!");
	} else if (userChoice === 1 && compChoice === 2) {
		console.log("You Lose!");
	} else if (userChoice === 1 && compChoice === 3) {
		console.log("You Win!");
	} else if (userChoice === 2 && compChoice === 1) {
		console.log("You Win!");
	} else if (userChoice === 2 && compChoice === 3) {
		console.log("You Lose!");
	} else if (userChoice === 3 && compChoice === 1) {
		console.log("You Lose!");
	} else if (userChoice === 3 && compChoice === 2) {
		console.log("You Win!");
	}
}

// rpsGame("paper")

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convertMiles(km) {
	console.log(km * .62137119);
}

// convertMiles(1354)

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function convertCM(feet) {
	console.log(feet * 30.48);
}

// convertCM(48)

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(start) {
	while (start > 0) {
		console.log(`${start} bottles of soda on the wall, ${start} bottles of soda, take one down pass it around ${--start} bottles of soda on the wall`)
	}
}

// annoyingSong(10)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function autoGrader(num) {
	if (num < 60) {
		return "Grade = F";
	} else if (num >= 60 && num < 70) {
		return "Grade = D";
	} else if (num >= 70 && num < 80) {
		return "Grade = C";
	} else if (num >= 80 && num < 90) {
		return "Grade = B";
	} else if (num >= 90) {
		return "Grade = A";
	}
}

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function countVowels(string) {
	let len = string.length

	let vowels = 0

	for (i = len; i >= 0; --i) {
		if (string.charAt(i) === "a" ||
			string.charAt(i) === "e" ||
			string.charAt(i) === "i" ||
			string.charAt(i) === "o" ||
			string.charAt(i) === "u") {

			vowels++;
			console.log(vowels)
		} else {
			return
		}
	}
	// console.log(vowels)
}

countVowels("apples are rare")

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
