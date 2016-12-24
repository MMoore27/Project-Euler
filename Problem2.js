//Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
//By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var firstNumber = 0;
var secondNumber = 1;
var sum=0;
var next;

for (i=0;i<10;i++)
{
	next=firstNumber + secondNumber;
	secondNumber=firstNumber;
	firstNumber=next;
	
	if(firstNumber % 2 ===0 && firstNumber < 4000000)
	{
		sum += firstNumber;
		
	}
}
console.log(sum);