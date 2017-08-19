//Global Variables
var number = 15;	//10seconds
var intervalId;	
var correctAnswer = ["heat", "darkknight", "Witness", "RedOctober"];	//run loop to see if selected answer is correct

//Keep tally of correct, incorrect, and unanswered
var unAnswered = 0;
var	correct = 0;
var inCorrect = 0;

var q1_Unanswered = true;
var q2_Unanswered = true;
var q3_Unanswered = true;
var q4_Unanswered = true;
var q5_Unanswered = true;

var q1_Correct = false;
var q2_Correct = false;
var q3_Correct = false;
var q4_Correct = false;
var q5_Correct = false;

var questionCount = [];
var unanswerCount = [];

var finish = false;	//used to diplay results when button is pressed

//When Start button is clicked display quesitons & hide [START] button
$("#start").on("click", function()
{
	$("#start").hide();

	//Display all questions that are inside the container
	$(".questionsContainer").show();

	//call run function which will show time and time decrementing
	run();



});

//If user answers all questions then we are done
$("#done").on("click", function()
{

	finish = true;

});

//Q1: Heat Question
//When the radio button is selected, we check to see if the selected answer is in the array.
$(".rad1").on("click", function()
{
	q1_Unanswered = false;

	//console.log($(this).val());
	//loop through array to compare answers to correctAnswer
	for(var i = 0; i < correctAnswer.length; i++)
	{
		if($(this).val() === correctAnswer[i])
		{
			
			q1_Correct = true;


		}
	}
});

//Q2: Batamn Question
$(".rad2").on("click", function()
{
	q2_Unanswered = false;

	

	//loop through array to compare answers to correctAnswer
	for(var i = 0; i < correctAnswer.length; i++)
	{
		
		if($(this).val() === correctAnswer[i])
		{
			q2_Correct = true;
		}
	}
});

//Q3: Witness Question
$(".rad3").on("click", function()
{
	q3_Unanswered = false;

	

	//loop through array to compare answers to correctAnswer
	for(var i = 0; i < correctAnswer.length; i++)
	{
		
		if($(this).val() === correctAnswer[i])
		{
			q3_Correct = true;
		}
	}
});

//Q4: Red October Question
$(".rad4").on("click", function()
{
	q4_Unanswered = false;

	

	//loop through array to compare answers to correctAnswer
	for(var i = 0; i < correctAnswer.length; i++)
	{
		
		if($(this).val() === correctAnswer[i])
		{
			q4_Correct = true;
		}
	}
});

//Q5: Terminator Question
$(".rad5").on("click", function()
{
	q5_Unanswered = false;

	

	//loop through array to compare answers to correctAnswer
	for(var i = 0; i < correctAnswer.length; i++)
	{
		
		if($(this).val() === correctAnswer[i])
		{
			q5_Correct = true;
		}
	}
});



//function1
function run()
{
	//place number for countdown inside <div id="time">
	$("#time").text(number);

	//setInterval is a predefined function that will run the function as a loop for every 1 sec
	intervalId = setInterval(decrement, 1000);
}

//function2
function decrement()
{
	number--;

	//Display decremented nubmer in loop
	$("#time").text(number);

	if(number === 0 || finish === true)
	{
		//push boolean results for question 1, question2 and unanswered onto both arrays. Note push here insead 
		//of for loop function in order to prevent boolean value errors.
		//We use True False methood of incrmenting because we don't want to increment multiple times if user
		//answers more than once for the same question.
		questionCount.push(q1_Correct);
		questionCount.push(q2_Correct);
		questionCount.push(q3_Correct);
		questionCount.push(q4_Correct);
		questionCount.push(q5_Correct);

		unanswerCount.push(q1_Unanswered);
		unanswerCount.push(q2_Unanswered);
		unanswerCount.push(q3_Unanswered);
		unanswerCount.push(q4_Unanswered);
		unanswerCount.push(q5_Unanswered);

		//stop decrement countdown and stop looping
		stop();

		//tally total correct and incorrect answers
		correct_incorrect();

		//tally total unanswered 
		 un_Answered();

		 //hide all questions so we can display results
		 $(".questionsContainer").hide();

		//Display anwer results
		$(".resultsContainer").show();

		//Display total correct answers
		$("#correct").text(correct);

		//Display total incorrect answers
		$("#incorrect").text(inCorrect);

		//Display total unanswered
		$("#unanswered").text(unAnswered);
	}
}

//function 3
function stop()
{
	clearInterval(intervalId);
}

//function 4
function correct_incorrect()
{
	for(var i = 0; i < questionCount.length; i++)
	{
		if(questionCount[i] === true)
		{
			correct++;
		}
		else if(questionCount[i] === false)
		{
			inCorrect++;
		}
	}
}

//function 5
function un_Answered()
{
	for(var i = 0; i < unanswerCount.length; i++)
	{
		
		if(unanswerCount[i] === true)
		{
			unAnswered++;
		}
	}
}


