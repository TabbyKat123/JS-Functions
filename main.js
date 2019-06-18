var attempts = prompt("Please enter the number of attempts:");
function myGame(attempts) 
{
	//var attempts = prompt to input the number of trials
	var q = Math.floor(Math.random()*100)+1;

var h = q%2;

if (h==0)//if result is not zero, then the number is odd
	alert("number is even");
else
	alert("number is odd");

for (var count=1;count<=10;count++)
{
	var num= prompt("please input any number:");
	if (num == q)
	{
		alert("You Win");
		break;
	}
	if (num<q){
		alert("Number is lower, "+"please try again.");
	}
	if (num>q){
		alert ("Number is higher, "+ "please try again.");
	}
	if (count ==attempts){ //if condition run 10 times if a wrong guess is input
		alert("You Lose!");
	}
} 
}
myGame(attempts);
