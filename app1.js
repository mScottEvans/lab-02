// function guessNumber(){
// 	let randomNum = Math.floor(Math.random() * 51);

//   console.log(randomNum);
//   let guess;
//   guess = prompt("Enter a number between 0 and 50");
//   console.log("Your guess is:" + guess);

//   if(guess < randomNum){
//     window.alert("Too low");
//   }

// }

let myNumber = 25;

const randomNumber = Math.floor(Math.random() * 100)

let userGuess = prompt('Guess the lucky number!')

while(userGuess < myNumber){
  userGuess = prompt('Too Low, keep trying!')
  if(userGuess > myNumber){
    userGuess = prompt('Too High, keep trying')
  }
}









// function getUserName(){
// 	let userName = prompt('Please Enter your Name: ');

// 	if(userName == 'Scott'){
// 		document.write('Welcome ' + userName);
// 	}else {
// 		document.write('Welcome' + userName);
// 	}
// }

// function joinTheBeatles(){
// 	let userAnswer = prompt('Do you love the Beatles?')
// 	console.log(userAnswer)
// 	if(userAnswer.toLowerCase() == 'yes'){
// 			let url = "https://cdn0.vox-cdn.com/thumbor/JTrP7wxDVveVMaPRxl6qcY_okvQ=/0x21:1240x719/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/48424833/beatles.0.0.jpg"
// 			document.write('<img src="' + url + '" id="thebeatles">')
// 	} else{
// 			let url2 = "https://tse3.mm.bing.net/th?id=OIP.8xJM25IHPWrFcW_WecIcUQAAAA&pid=Api&P=0&w=300&h=300"
// 			document.write('<img src="' + url2 + '" id="thebeatles2">')
// 	}
// }	




// function randomNumberGenerator(){
// 	let correctAnswer = Math.floor(Math.random() * 100) +1;
// 	return correctAnswer;
// }



// function userGuessingGame(correctAnswer){
// 	userAnswer = prompt("Guess a number between 1 and 100");
// 	if(userAnswer == correctAnswer){
// 			alert('You got it right');
// 	} else {
// 			alert('Sorry, that answer is incorrect');
// 	}
// }

// function numberBeatles(){
// 	let userAnswer = prompt("How many beatles would you like?")
// 	for(let i = 1; i <= userAnswer; i++){
// 		let beatle = "https://3.bp.blogspot.com/-2Pm6nGXTzu0/WCedpLdSZ-I/AAAAAAAAJF0/6INAF_6TlFcBDHJhJdwbJvtj-sxOS-fdgCLcB/s1600/DicaelusLaevipennisCO1e.jpg"
// 		document.write('<img src="' + beatle + '"id = "bug">' )
// 	}
// }


