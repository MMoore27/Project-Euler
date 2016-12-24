//Problem 3 Largest prime factor

var factors = [];
var x=56;

function prime(num) 
{
    for (var i = 2; i < num; i++) 
	{
		if (num % i === 0) 
		{
			return false;
		}
	}
	return true;
}


for(i=2; i < x; i++) 
{
     if(x % i === 0 && prime (i))
  {
  	factors.push(i) ;
  }
}

var largest = Math.max.apply(Math, factors);

console.log ("The prime factors are " + (factors) );



