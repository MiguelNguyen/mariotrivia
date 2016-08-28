var questions = [
{
	question:"What was Mario originially known as?",
	answer:"jumpman"
},
{
	question:"True or False, Mario was originially a carpenter.",
	answer:"true"
},
{
	question:"In what other game was Mario in, but played as the bad guy?",
	answer:"donkey kong jr"
},
{
	question:"Who is Marios pet that he rides and feeds apples to?",
	answer:"yoshi"
},
{
	question:"Who is Mario's best friend?",
	answer:"luigi"
},
{
	question:"Who does Mario always have to save?",
	answer:"princess peach"
},
{
	question:"True or false, Mario is also a doctor.",
	answer:"true"
},
{
	question:"Has Mario ever used a water pump in any of his games?",
	answer:"yes"
},
{
	question:"What's the name of Mario's evil counterpart?",
	answer:"wario"
},
{
	question:"What's Luigi's evil counterpart named?",
	answer:"waluigi"
}
]


for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function showResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}







