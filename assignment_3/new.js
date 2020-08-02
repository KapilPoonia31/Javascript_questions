//Very Easy

//Q1 convert minutes into seconds

function time_convert(number)
{
	var seconds=number*60;
	return(seconds);
}
console.log(time_convert(5));


//Q2 divides evenly

function dividesEvenly(num1,num2)
{
	if (num1 % num2 ==0) 
	{
		return(true);
	}
	else
	{
     return(false);
	}
}
console.log(dividesEvenly(85,4));

 
 
 //Easy

//Q1 count instances of a character in a string

function charCount(string1,string2) 
{
var string2_Count = 0;
for (var position = 0; position < string1.length; position++) 
{
    if (string1.charAt(position) == string2) 
    {
       string2_Count += 1;
    }
}
return string2_Count;
}
console.log(charCount('chamber of secrets','c'));

//Q2 add up the numbers from single numbers

function Add(num)
{
	var sum=0;
	for (var i =1; i <= num; i++)
	{
		sum+=i;
	}
	return sum;
}
console.log(Add(13));




//Medium

//Q1. Reverse words starting with a particular letter

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('first man to walk on the moon');

//Q2. Hitting the jackpot

   function array_Validator(e1,e2,e3,e4)
   {
       let m_Array=[e1,e2,e3,e4];
       for(let i=0;i<m_Array.length-1;i++)
       {
           for(let x=i;x<m_Array.length-1;x++)
           {
               if(m_Array[i]!==m_Array[x+1])
               {
                   return false;
               }
               else
               return true;
           }
       }
   }


  let u_Result=array_Validator("SS","SS","Ss","Ss");

   console.log(u_Result);

//Q3 Removes duplicates from an array

function removeDups(string) 
{
    var x,
      len=string.length,
      out=[],
      obj={};
 
    for (x=0; x<len; x++) 
    {
    obj[string[x]]=0;
    }  
    for (x in obj)  
    {
    out.push(x);
    }
   return out;
} 
var string = ['1','0','1','0'];
result = removeDups(string);
console.log(string);
console.log(result);


//Hard 

//Q1. Get real type

function data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(data_type(14));
console.log(data_type('realtype'));
console.log(data_type(false));



